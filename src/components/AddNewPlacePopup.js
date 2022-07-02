import Input from './Input';
import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';
export default function AddNewPlacePopup({ isOpen, onAddPlace, isLoading, onClose }) {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setValid] = useState({});

	useEffect(() => {
		setValues({ name: '', link: '' });
		setErrors({ name: '', link: '' });
		setValid({ name: false, link: false });
	}, [isOpen]);

	function handleChange(event) {
		const { name, value, validity, validationMessage } = event.target;
		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: validationMessage });
		setValid({ ...isValid, [name]: validity.valid });
	}

	function handleSubmit(e) {
		e.preventDefault();
		onAddPlace(values, e);
	}

	return (
		<PopupWithForm
			isOpen={isOpen}
			name="card"
			title="Новое место"
			buttonText={isLoading ? 'Создание...' : 'Создать'}
			onSubmit={handleSubmit}
			onClose={onClose}
			isDisabled={!(isValid.name && isValid.link)}
		>
			<Input
				className="card-name"
				name="name"
				placeholder="Название"
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
				className="card-link"
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
