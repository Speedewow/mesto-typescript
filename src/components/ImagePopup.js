export const ImagePopup = ({ card, onClose }) => (
	<section className={`popup image-popup ${card.isOpen && 'popup_opened'}`}>
		<div className="popup__image-overlay" onClick={onClose}></div>
		<div className="popup__image-container">
			<button className="popup__toggle" onClick={onClose}></button>
			<img className="popup__image" src={card.link} alt={card.name} />
			<h2 className="popup__image-title">{card.name}</h2>
		</div>
	</section>
);
