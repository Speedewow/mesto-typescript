import PopupWithForm from './PopupWithForm';
export default function ConfirmPopup({ isOpen, onClose }) {
	return <PopupWithForm isOpen={isOpen} onClosePopup={onClose} name="confirm" title="Вы уверены?" />;
}
