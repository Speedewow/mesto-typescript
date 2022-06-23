import Input from './Input';
import PopupWithForm from './PopupWithForm';
export default function EditAvatarPopup({ isOpen, onClose }) {
	return (
		<PopupWithForm isOpen={isOpen} onClosePopup={onClose} name="avatar" title="Обновить аватар">
			<Input className="avatar-link" name="link" placeholder="Ссылка на картинку" type="url" />
		</PopupWithForm>
	);
}
