import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
	const { _id } = useContext(CurrentUserContext);
	const isOwn = card.owner._id === _id;
	const cardDeleteButtonClassName = `card__delete-button ${
		isOwn ? '' : 'card__delete-button_hidden'
	}`;
	const isLiked = card.likes.some(i => i._id === _id);
	const cardLikeButtonClassName = `card__button ${isLiked ? 'card__button_active' : ''}`;

	function handleCardClick() {
		onCardClick(card);
	}

	function handleLikeClick() {
		onCardLike(card);
	}

	function handleCardDelete() {
		onCardDelete(card);
	}

	return (
		<li className="card">
			<button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
			<div
				className="card__image"
				style={{ backgroundImage: `url(${card.link})` }}
				onClick={handleCardClick}
			/>
			<div className="card__container">
				<h2 className="card__title">{card.name}</h2>
				<div className="card__like-container">
					<button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
					<span className="card__like-counter">{card.likes.length}</span>
				</div>
			</div>
		</li>
	);
}
