import { Input } from './Input';
import { PopupWithForm } from './PopupWithForm';
import { useState, useEffect, FC } from 'react';
import {IValues, IErrors, IValidity} from "../types/interfaces"
import { EditAvatarPopupProps } from '../types/types';

export const EditAvatarPopup : FC<EditAvatarPopupProps> = ({ isOpen, onUpdateAvatar, isLoading, onClose }) => {
 const [values, setValues] = useState<IValues>({});
  const [errors, setErrors] = useState<IErrors>({});
  const [validly, setValidly] = useState<IValidity>({});

  useEffect(() => {
    setValues({ link: '' });
    setErrors({ link: '' });
    setValidly({ link: false });
  }, [isOpen]);

  const handleChange =  (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setValidly({ ...validly, [name]: validity.valid });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
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
