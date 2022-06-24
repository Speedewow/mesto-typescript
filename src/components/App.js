import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddNewPlacePopup from './AddNewPlacePopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';

function App() {
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [userData, setUserData] = useState({});
	const [cards, setCards] = useState([]);

	useEffect(() => {
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
			<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
			<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
			<AddNewPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
			<ImagePopup card={selectedCard} onClose={closeAllPopups} />
		</>
	);
}
export default App;
