import Input from './Input';
import PopupWithForm from './PopupWithForm';
export default function AddNewPlacePopup({ isOpen, onClose }) {
	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name="card" title="Новое место" buttonText="Создать">
			<Input className="card-name" name="name" placeholder="Название" type="text" />
			<Input className="card-link" name="link" placeholder="Ссылка на картинку" type="url" />
		</PopupWithForm>
	);
}
