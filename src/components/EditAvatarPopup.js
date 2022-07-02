import Input from './Input';
import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

export default function EditAvatarPopup({ isOpen, onUpdateAvatar, isLoading, onClose }) {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setValid] = useState({});

	useEffect(() => {
		setValues({ link: '' });
		setErrors({ link: '' });
		setValid({ link: false });
	}, [isOpen]);

	function handleChange(event) {
		const { name, value, validity, validationMessage } = event.target;
		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: validationMessage });
		setValid({ ...isValid, [name]: validity.valid });
	}

	function handleSubmit(e) {
		e.preventDefault();
		onUpdateAvatar(values, e);
	}

	return (
		<PopupWithForm
			isOpen={isOpen}
			name="avatar"
			title="Обновить аватар"
			buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
			onSubmit={handleSubmit}
			onClose={onClose}
			isDisabled={!isValid.link}
		>
			<Input
				className="avatar-link"
				name="link"
				placeholder="Ссылка на картинку"
				type="url"
				value={values.link}
				handleChange={handleChange}
				required
				autoComplete="off"
				validationMessage={errors.link}
			/>
		</PopupWithForm>
	);
}
