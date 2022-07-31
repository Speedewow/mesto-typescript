import { useState, useEffect, FC } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import GlobalStyles from '../styled/global/GlobalStyles';
import { IInfo, ICard, IUser, IValues, IResponse, ILogin, ISelect } from '../types/interfaces';
import { defaultCard, defaultUser, failureInfo, successInfo, defaultInfo } from '../constants/constants';
import {
  Login,
  Register,
  ProtectedRoute,
  Header,
  Main,
  EditAvatarPopup,
  EditProfilePopup,
  AddNewPlacePopup,
  ConfirmPopup,
  ImagePopup,
  InfoTooltip,
  CurrentUserContext,
  getSingIn,
  getSingUp,
  getLoginData,
  getUserInfo,
  Footer,
  getInitialCard,
  setUserInfo,
  createNewCard,
  createNewAvatar,
  deleteCard,
  changeLikeCardStatus,
} from '../constants/reimports';

export const App: FC = () => {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState<boolean>(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState<boolean>(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser>(defaultUser);
  const [selectedCard, setSelectedCard] = useState<ISelect>(defaultCard);
  const [deletedCard, setDeletedCard] = useState<ISelect>(defaultCard);
  const [cards, setCards] = useState<ICard[]>([]);
  const [infoTooltip, setInfoTooltip] = useState<IInfo>(defaultInfo);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const history = useHistory<any>();

  useEffect(() => {
    getUserInfo()
      .then((user : IUser) => setCurrentUser(user))
      .catch((err : string) => console.log(err));
    getInitialCard()
      .then((cards : ICard[]) => setCards(cards))
      .catch((err : string) => console.log(err));
  }, []);

  useEffect(() => {
    const closeByKey = (e : KeyboardEvent) => {
      e.key === 'Escape' && closeAllPopups(e);
    };
    document.addEventListener('keydown', closeByKey);
    return () => document.removeEventListener('keydown', closeByKey);
  }, []);

  useEffect(() => {
    const tokenCheck = () => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        getLoginData(jwt)
          .then((res : IResponse) => {
            if (res.data.email) {
              setEmail(res.data.email);
              setIsLogin(true);
              history.push('/');
            }
          })
          .catch((err : string) => console.log(err));
      }
    };
    tokenCheck();
  }, [history]);

  const handleRegister = (formData : ILogin) => {
    getSingUp(formData)
      .then((res : IResponse) => {
        if (res.email) {
          setInfoTooltip(successInfo);
        }
        history.push('/sign-in');
      })
      .catch((err : string) => {
        setInfoTooltip(failureInfo);
        console.log(err);
      });
  };

  const handleLogin = (formData : ILogin) => {
    getSingIn(formData)
      .then((res : IResponse) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLogin(true);
          setEmail(formData.email);
          history.push('/');
        }
      })
      .catch((err : string) => console.log(err));
  };

  const handleSignOut = () => {
    setIsLogin(false);
    localStorage.removeItem('jwt');
    history.push('/');
  };

  const handleCardLike =(card : ICard) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    changeLikeCardStatus(card._id, !isLiked)
      .then((newCard : ICard) =>
        setCards(state => state.map(element => (element._id === card._id ? newCard : element)))
      )
      .catch((err : string) => console.log(err));
  };

  const handleRequest = (argument : any, event : any, request : any, logic : any) => {
    setLoading(true);
    request(argument)
      .then(logic)
      .then(() => closeAllPopups(event))
      .catch((err : string) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleCardDelete = (card : ICard,  e : React.FormEvent<HTMLFormElement>) => {
    const logic = setCards(state => state.filter(element => element._id !== card._id));
    handleRequest(card._id, e, deleteCard, logic);
  };

  const handleUpdateUser = (formData : IValues,  e : React.FormEvent<HTMLFormElement>) => {
    const logic = (update : any) => setCurrentUser(update);
    handleRequest(formData, e, setUserInfo, logic);
  };

  const handleUpdateAvatar = (url : IValues,  e : React.FormEvent<HTMLFormElement>) => {
    const logic = (update : any) => setCurrentUser(update);
    handleRequest(url, e, createNewAvatar, logic);
  };

  const handleAddPlace = (formData : IValues,  e : React.FormEvent<HTMLFormElement>) => {
    const logic = (card : ICard) => setCards([card, ...cards]);
    handleRequest(formData, e, createNewCard, logic);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleConfirmPopupClick = (card : ICard) => {
    setDeletedCard({ ...card, isOpen: true });
  };
  const handleCardClick = (card : ICard) => {
    setSelectedCard({ ...card, isOpen: true });
  };

  const closeAllPopups = (e : React.MouseEvent<HTMLElement> | KeyboardEvent) => {
    e.preventDefault();
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(defaultCard);
    setDeletedCard(defaultCard);
    setInfoTooltip(defaultInfo);
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header email={email} onSignOut={handleSignOut} />
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            isLogin={isLogin}
            component={Main}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onCardDelete={handleConfirmPopupClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
          />
          <Route path="/sing-in">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/sing-up">
            <Register onRegister={handleRegister} />
          </Route>
          <Route>{isLogin ? <Redirect to="/" /> : <Redirect to="/sing-in" />}</Route>
        </Switch>
        {isLogin && <Footer />}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={loading}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          isLoading={loading}
          onClose={closeAllPopups}
        />
        <AddNewPlacePopup
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlace}
          isLoading={loading}
          onClose={closeAllPopups}
        />
        <ConfirmPopup
          card={deletedCard}
          onCardDelete={handleCardDelete}
          isLoading={loading}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <InfoTooltip info={infoTooltip} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
      <GlobalStyles />
    </>
  );
};
