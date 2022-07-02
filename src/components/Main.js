import Card from './Card';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
	onEditAvatar,
	onEditProfile,
	onAddPlace,
	cards,
	onCardClick,
	onCardLike,
	onCardDelete,
}) {
	const { avatar, name, about } = useContext(CurrentUserContext);
	return (
		<main className="main">
			<section className="profile">
				<div className="profile__avatar">
					<button className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
					<div className="profile__image" style={{ backgroundImage: `url(${avatar})` }} />
				</div>
				<div className="profile__info">
					<h1 className="profile__title">{name}</h1>
					<button className="profile__edit-button" onClick={onEditProfile}></button>
					<p className="profile__subtitle">{about}</p>
				</div>
				<button className="profile__button" onClick={onAddPlace}></button>
			</section>
			<section>
				<ul className="cards">
					{cards.map(card => (
						<Card
							key={card._id}
							onCardClick={onCardClick}
							card={card}
							onCardLike={onCardLike}
							onCardDelete={onCardDelete}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}
