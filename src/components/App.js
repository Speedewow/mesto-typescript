import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditAvatarPopup } from './EditAvatarPopup';
import { EditProfilePopup } from './EditProfilePopup';
import { AddNewPlacePopup } from './AddNewPlacePopup';
import { ConfirmPopup } from './ConfirmPopup';
import { ImagePopup } from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
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
	const [cards, setCards] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getUserInfo()
			.then(user => setCurrentUser(user))
			.catch(err => console.log(err));
		getInitialCard()
			.then(cards => setCards(cards))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		function closeByKey(e) {
			if (e.key === 'Escape') closeAllPopups(e);
		}
		document.addEventListener('keydown', closeByKey);
		return () => {
			document.removeEventListener('keydown', closeByKey);
		};
	}, []);

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
	};

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
};
