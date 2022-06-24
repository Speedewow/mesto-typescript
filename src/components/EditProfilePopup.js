import Input from './Input';
import PopupWithForm from './PopupWithForm';
export default function EditProfilePopup({ isOpen, onClose }) {
	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name="profile" title="Редактировать профиль" buttonText="Сохранить">
			<Input className="profile-name" name="name" placeholder="Введите имя" type="text" />
			<Input className="profile-info" name="info" placeholder="Введите профессию" type="text" />
		</PopupWithForm>
	);
}
