import Input from './Input';
import PopupWithForm from './PopupWithForm';
export default function EditAvatarPopup({ isOpen, onClose }) {
	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name="avatar" title="Обновить аватар" buttonText="Сохранить">
			<Input className="avatar-link" name="link" placeholder="Ссылка на картинку" type="url" />
		</PopupWithForm>
	);
}
