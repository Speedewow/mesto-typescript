export default function ImagePopup({ card, onClose }) {
	return (
		<section className={`popup image-popup ${card.isOpen && 'popup_opened'}`}>
			<div className="popup__image-overlay"></div>
			<div className="popup__image-container">
				<button className="popup__toggle" onClick={onClose}></button>
				<img className="popup__image" src={card.link} alt={card.title} />
				<h2 className="popup__image-title">{card.title}</h2>
			</div>
		</section>
	);
}
