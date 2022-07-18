import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
	const { _id } = useContext(CurrentUserContext);
	const isOwn = card.owner._id === _id;
	const cardDeleteButtonClassName = `card__delete-button ${!isOwn && 'card__delete-button_hidden'}`;
	const isLiked = card.likes.some(like => like._id === _id);
	const cardLikeButtonClassName = `card__button ${isLiked && 'card__button_active'}`;

	const handleCardClick = () => {
		onCardClick(card);
	};

	const handleLikeClick = () => {
		onCardLike(card);
	};

	const handleCardDelete = () => {
		onCardDelete(card);
	};

	return (
		<li className="card">
			<button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
			<img className="card__image" src={card.link} onClick={handleCardClick} alt={card.name} />
			<div className="card__container">
				<h2 className="card__title">{card.name}</h2>
				<div className="card__like-container">
					<button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
					<span className="card__like-counter">{card.likes.length}</span>
				</div>
			</div>
		</li>
	);
};
