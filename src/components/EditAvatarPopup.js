import { Input } from './Input';
import { PopupWithForm } from './PopupWithForm';
import { useState, useEffect } from 'react';

export const EditAvatarPopup = ({ isOpen, onUpdateAvatar, isLoading, onClose }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [validly, setValidly] = useState({});

  useEffect(() => {
    setValues({ link: '' });
    setErrors({ link: '' });
    setValidly({ link: false });
  }, [isOpen]);

  const handleChange = event => {
    const { name, value, validity, validationMessage } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setValidly({ ...validly, [name]: validity.valid });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar(values, e);
  };
  const buttonText = isLoading ? 'Сохранение...' : 'Сохранить';
  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      buttonText={buttonText}
      onSubmit={handleSubmit}
      onClose={onClose}
      isDisabled={!validly.link}
    >
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
