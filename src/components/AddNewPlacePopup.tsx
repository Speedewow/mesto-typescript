import  React, { FC } from 'react';
import { Input } from './Input';
import { PopupWithForm } from './PopupWithForm';
import { useState, useEffect } from 'react';
import {IValues, IErrors, IValidity} from "../types/interfaces"
import { AddPlacePopupProps } from '../types/types';


export const AddNewPlacePopup: FC<AddPlacePopupProps> = ({ isOpen, onAddPlace, isLoading, onClose }) => {
  const [values, setValues] = useState<IValues>({});
  const [errors, setErrors] = useState<IErrors>({});
  const [validly, setValidly] = useState<IValidity>({});

  useEffect(() => {
    setValues({ name: '', link: '' });
    setErrors({ name: '', link: '' });
    setValidly({ name: false, link: false });
  }, [isOpen]);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setValidly({ ...validly, [name]: validity.valid });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
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
