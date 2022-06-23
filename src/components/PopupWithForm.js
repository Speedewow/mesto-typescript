export default function PopupWithForm({ title, name, isOpen, children, onClosePopup }) {
	return (
		<section className={`popup ${name}-popup ${isOpen ? 'popup_opened' : ' '}`}>
			<form className={`popup__form ${name}-form`} id={`${name}-form`} noValidate>
				<button className="popup__toggle" onClick={onClosePopup}></button>
				<h2 className="popup__title">{title}</h2>
				<fieldset className="popup__fieldset">{children}</fieldset>
				<button className="popup__submit-button">Сохранить</button>
			</form>
		</section>
	);
}
