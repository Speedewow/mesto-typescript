export default function Card({ card, onCardClick }) {
	function handleCardClick() {
		onCardClick(card);
	}
	return (
		<li className="card">
			<button className="card__delete-button"></button>
			<div className="card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleCardClick} />
			<div className="card__container">
				<h2 className="card__title">{card.title}</h2>
				<div className="card__like-container">
					<button className="card__button"></button>
					<span className="card__like-counter">{card.likes}</span>
				</div>
			</div>
		</li>
	);
}
