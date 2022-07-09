export const PopupWithForm = ({
	title,
	name,
	isOpen,
	children,
	onClose,
	buttonText,
	onSubmit,
	isDisabled,
}) => {
	return (
		<section className={`popup ${name}-popup ${isOpen && 'popup_opened'}`}>
			<div className="popup__overlay" onClick={onClose}></div>
			<form
				className={`popup__form ${name}-form`}
				id={`${name}-form`}
				noValidate
				onSubmit={onSubmit}
			>
				<button className="popup__toggle" onClick={onClose}></button>
				<h2 className="popup__title">{title}</h2>
				<fieldset className="popup__fieldset">{children}</fieldset>
				<button
					className={`popup__submit-button ${isDisabled ? 'popup__submit-button_disabled' : ''}`}
					disabled={isDisabled}
				>
					{buttonText}
				</button>
			</form>
		</section>
	);
};
