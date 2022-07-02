import Input from './Input';
import PopupWithForm from './PopupWithForm';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onUpdateUser, isLoading, onClose }) {
	const currentUser = useContext(CurrentUserContext);
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setValid] = useState({});

	useEffect(() => {
		setValues({ name: currentUser.name, about: currentUser.about });
		setErrors({ name: '', about: '' });
		setValid({ name: true, about: true });
	}, [currentUser, isOpen]);

	function handleChange(event) {
		const { name, value, validity, validationMessage } = event.target;
		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: validationMessage });
		setValid({ ...isValid, [name]: validity.valid });
	}

	function handleSubmit(e) {
		e.preventDefault();
		onUpdateUser(values, e);
	}

	return (
		<PopupWithForm
			isOpen={isOpen}
			name="profile"
			title="Редактировать профиль"
			buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
			onSubmit={handleSubmit}
			onClose={onClose}
			isDisabled={!(isValid.name && isValid.about)}
		>
			<Input
				className="profile-name"
				name="name"
				placeholder="Введите имя"
				type="text"
				value={values.name}
				handleChange={handleChange}
				required
				minLength="2"
				maxLength="40"
				autoComplete="off"
				validationMessage={errors.name}
			/>

			<Input
				className="profile-info"
				name="about"
				placeholder="Введите профессию"
				type="text"
				value={values.about}
				handleChange={handleChange}
				required
				minLength="2"
				maxLength="200"
				autoComplete="off"
				validationMessage={errors.about}
			/>
		</PopupWithForm>
	);
}
