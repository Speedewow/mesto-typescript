import PopupWithForm from './PopupWithForm';
export default function ConfirmPopup({ card, onCardDelete, isLoading, onClose }) {
	function handleSubmit(e) {
		onCardDelete(card, e);
		e.preventDefault();
	}
	return (
		<PopupWithForm
			isOpen={card.isOpen}
			onClose={onClose}
			name="confirm"
			title="Вы уверены?"
			buttonText={isLoading ? 'Удаление...' : 'Да'}
			onSubmit={handleSubmit}
		/>
	);
}
