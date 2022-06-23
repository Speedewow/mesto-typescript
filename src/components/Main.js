import Card from './Card';
export default function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, userData, onCardClick }) {
	return (
		<main className="main">
			<section className="profile">
				<div className="profile__avatar">
					<button className="profile__avatar-edit-button" onClick={onEditAvatar}></button>
					<div className="profile__image" style={{ backgroundImage: `url(${userData.avatar})` }} />
				</div>
				<div className="profile__info">
					<h1 className="profile__title">{userData.name}</h1>
					<button className="profile__edit-button" onClick={onEditProfile}></button>
					<p className="profile__subtitle">{userData.info}</p>
				</div>
				<button className="profile__button" onClick={onAddPlace}></button>
			</section>
			<section>
				<ul className="cards">
					{cards.map(card => (
						<Card key={card.id} onCardClick={onCardClick} card={card} />
					))}
				</ul>
			</section>
		</main>
	);
}
