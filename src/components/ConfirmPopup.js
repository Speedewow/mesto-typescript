import { PopupWithForm } from './PopupWithForm';

export const ConfirmPopup = ({ card, onCardDelete, isLoading, onClose }) => {
	const handleSubmit = e => {
		onCardDelete(card, e);
		e.preventDefault();
	};

	const buttonText = isLoading ? 'Удаление...' : 'Да';

	return (
		<PopupWithForm
			isOpen={card.isOpen}
			onClose={onClose}
			name="confirm"
			title="Вы уверены?"
			buttonText={buttonText}
			onSubmit={handleSubmit}
		/>
	);
};
