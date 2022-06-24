import PopupWithForm from './PopupWithForm';
export default function ConfirmPopup({ isOpen, onClose }) {
	return <PopupWithForm isOpen={isOpen} onClose={onClose} name="confirm" title="Вы уверены?" buttonText="Да" />;
}
