import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddNewPlacePopup from './AddNewPlacePopup';
import ConfirmPopup from './ConfirmPopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [deletedCard, setDeletedCard] = useState({});
	const [cards, setCards] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		api
			.getUserInfo()
			.then(user => setCurrentUser(user))
			.catch(err => console.log(err));
		api
			.getInitialCard()
			.then(cards => setCards(cards))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		function closeByKey(e) {
			if (e.keyCode === 27) closeAllPopups(e);
		}
		document.addEventListener('keydown', closeByKey);
		return () => {
			document.removeEventListener('keydown', closeByKey);
		};
	}, []);

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		api
			.changeLikeCardStatus(card._id, !isLiked)
			.then(newCard => setCards(state => state.map(c => (c._id === card._id ? newCard : c))))
			.catch(err => console.log(err));
	}

	function handleCardDelete(card, e) {
		setLoading(true);
		api
			.deleteCard(card._id)
			.then(setCards(state => state.filter(c => c._id !== card._id)))
			.then(() => closeAllPopups(e))
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	}

	function handleUpdateUser(formData, e) {
		setLoading(true);
		api
			.setUserInfo(formData)
			.then(update => setCurrentUser(update))
			.then(() => closeAllPopups(e))
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	}

	function handleUpdateAvatar(url, e) {
		setLoading(true);
		api
			.createNewAvatar(url)
			.then(update => setCurrentUser(update))
			.then(() => closeAllPopups(e))
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	}

	function handleAddPlace(formData, e) {
		setLoading(true);
		api
			.createNewCard(formData)
			.then(card => setCards([card, ...cards]))
			.then(() => closeAllPopups(e))
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	}

	function handleEditAvatarClick() {
		setEditAvatarPopupOpen(true);
	}
	function handleEditProfileClick() {
		setEditProfilePopupOpen(true);
	}
	function handleAddPlaceClick() {
		setAddPlacePopupOpen(true);
	}
	function handleConfirmPopupClick(card) {
		setDeletedCard({ ...card, isOpen: true });
	}
	function handleCardClick(card) {
		setSelectedCard({ ...card, isOpen: true });
	}

	function closeAllPopups(e) {
		e.preventDefault();
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({});
		setDeletedCard({});
	}

	return (
		<>
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onCardDelete={handleConfirmPopupClick}
					cards={cards}
					onCardClick={handleCardClick}
					onCardLike={handleCardLike}
				/>
				<Footer />
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
			</CurrentUserContext.Provider>
		</>
	);
}
export default App;
