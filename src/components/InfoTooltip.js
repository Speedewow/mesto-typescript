export const InfoTooltip = ({ info, onClose }) => (
	<section className={`popup infoTooltip-popup ${info.isOpen && 'popup_opened'}`}>
		<div className="popup__overlay" onClick={onClose} />
		<div className="popup__form">
			<button className="popup__toggle" onClick={onClose} />
			<img className="popup__infoTooltip-image" src={info.link} alt={info.text} />
			<h2 className="popup__title">{info.text}</h2>
		</div>
	</section>
);
