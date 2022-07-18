import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import { ProtectedRoute } from './ProtectedRoute';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditAvatarPopup } from './EditAvatarPopup';
import { EditProfilePopup } from './EditProfilePopup';
import { AddNewPlacePopup } from './AddNewPlacePopup';
import { ConfirmPopup } from './ConfirmPopup';
import { ImagePopup } from './ImagePopup';
import { InfoTooltip } from './InfoTooltip';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { getSingIn, getSingUp, getLoginData } from '../utils/AuthApi';
import successImage from '../images/success.svg';
import failureImage from '../images/failure.svg';
import {
	getUserInfo,
	getInitialCard,
	setUserInfo,
	createNewCard,
	createNewAvatar,
	deleteCard,
	changeLikeCardStatus,
} from '../utils/Api';

export const App = () => {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [deletedCard, setDeletedCard] = useState({});
	const [infoTooltip, setInfoTooltip] = useState({});
	const [cards, setCards] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const history = useHistory();

	useEffect(() => {
		getUserInfo()
			.then(user => setCurrentUser(user))
			.catch(err => console.log(err));
		getInitialCard()
			.then(cards => setCards(cards))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		const closeByKey = e => {
			e.key === 'Escape' && closeAllPopups(e);
		};
		document.addEventListener('keydown', closeByKey);
		return () => {
			document.removeEventListener('keydown', closeByKey);
		};
	}, []);

	useEffect(() => {
		const tokenCheck = () => {
			const jwt = localStorage.getItem('jwt');
			if (jwt) {
				getLoginData(jwt)
					.then(res => {
						if (res.data.email) {
							setEmail(res.data.email);
							setIsLogin(true);
							history.push('/');
						}
					})
					.catch(err => console.log(err));
			}
		};
		tokenCheck();
	}, [history]);

	const handleRegister = formData => {
		getSingUp(formData)
			.then(res => {
				if (res.data.email) {
					setInfoTooltip({
						isOpen: true,
						text: 'Вы успешно зарегистрировались!',
						link: successImage,
					});
				}
				history.push('/sign-in');
			})
			.catch(err => {
				setInfoTooltip({
					isOpen: true,
					text: 'Что-то пошло не так! Попробуйте еще раз.',
					link: failureImage,
				});
				console.log(err);
			});
	};

	const handleLogin = formData => {
		getSingIn(formData)
			.then(res => {
				if (res.token) {
					localStorage.setItem('jwt', res.token);
					setIsLogin(true);
					setEmail(formData.email);
					history.push('/');
				}
			})
			.catch(err => console.log(err));
	};

	const handleSignOut = () => {
		setIsLogin(false);
		localStorage.removeItem('jwt');
		history.push('/');
	};

	const handleCardLike = card => {
		const isLiked = card.likes.some(like => like._id === currentUser._id);
		changeLikeCardStatus(card._id, !isLiked)
			.then(newCard =>
				setCards(state => state.map(element => (element._id === card._id ? newCard : element)))
			)
			.catch(err => console.log(err));
	};

	const handleRequest = (argument, event, request, logic) => {
		setLoading(true);
		request(argument)
			.then(logic)
			.then(() => closeAllPopups(event))
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	};

	const handleCardDelete = (card, e) => {
		const logic = setCards(state => state.filter(element => element._id !== card._id));
		handleRequest(card._id, e, deleteCard, logic);
	};

	const handleUpdateUser = (formData, e) => {
		const logic = update => setCurrentUser(update);
		handleRequest(formData, e, setUserInfo, logic);
	};

	const handleUpdateAvatar = (url, e) => {
		const logic = update => setCurrentUser(update);
		handleRequest(url, e, createNewAvatar, logic);
	};

	const handleAddPlace = (formData, e) => {
		const logic = card => setCards([card, ...cards]);
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
	const handleConfirmPopupClick = card => {
		setDeletedCard({ ...card, isOpen: true });
	};
	const handleCardClick = card => {
		setSelectedCard({ ...card, isOpen: true });
	};

	const closeAllPopups = e => {
		e.preventDefault();
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({});
		setDeletedCard({});
		setInfoTooltip({});
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
		</>
	);
};
