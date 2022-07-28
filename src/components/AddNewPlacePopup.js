import { Input } from './Input';
import { PopupWithForm } from './PopupWithForm';
import { useState, useEffect } from 'react';

export const AddNewPlacePopup = ({ isOpen, onAddPlace, isLoading, onClose }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validly, setValidly] = useState({});

  useEffect(() => {
    setValues({ name: '', link: '' });
    setErrors({ name: '', link: '' });
    setValidly({ name: false, link: false });
  }, [isOpen]);

  const handleChange = event => {
    const { name, value, validity, validationMessage } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setValidly({ ...validly, [name]: validity.valid });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddPlace(values, e);
  };

  const buttonText = isLoading ? 'Создание...' : 'Создать';

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Новое место"
      buttonText={buttonText}
      onSubmit={handleSubmit}
      onClose={onClose}
      isDisabled={!(validly.name && validly.link)}
    >
      <Input
        name="name"
        placeholder="Название"
        type="text"
        value={values.name}
        handleChange={handleChange}
        required
        minLength={2}
        maxLength={40}
        autoComplete="off"
        validationMessage={errors.name}
      />
      <Input
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
};
