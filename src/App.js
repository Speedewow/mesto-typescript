import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import EditAvatarPopup from './components/EditAvatarPopup';
import EditProfilePopup from './components/EditProfilePopup';
import AddNewPlacePopup from './components/AddNewPlacePopup';
import ImagePopup from './components/ImagePopup';
import { api } from './utils/Api';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({});
	const [userData, setUserData] = React.useState({});
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api
			.getUserInfo()
			.then(data => {
				setUserData({
					name: data.name,
					avatar: data.avatar,
					info: data.about,
				});
			})
			.catch(err => {
				console.log(err);
			});
		api
			.getInitialCard()
			.then(data => {
				setCards(
					data.map(item => ({
						id: item._id,
						link: item.link,
						title: item.name,
						likes: item.likes.length,
					}))
				);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	function handleEditAvatarClick() {
		setEditAvatarPopupOpen(true);
	}
	function handleEditProfileClick() {
		setEditProfilePopupOpen(true);
	}
	function handleAddPlaceClick() {
		setAddPlacePopupOpen(true);
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
	}

	return (
		<>
			<Header />
			<Main onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} userData={userData} cards={cards} onCardClick={handleCardClick} />
			<Footer />
			<PopupWithForm onClosePopup={closeAllPopups} />
			<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClosePopup={closeAllPopups} />
			<EditProfilePopup isOpen={isEditProfilePopupOpen} onClosePopup={closeAllPopups} />
			<AddNewPlacePopup isOpen={isAddPlacePopupOpen} onClosePopup={closeAllPopups} />
			<ImagePopup card={selectedCard} onClosePopup={closeAllPopups} />
		</>
	);
}
export default App;
