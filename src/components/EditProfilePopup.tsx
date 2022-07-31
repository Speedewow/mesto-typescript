import { Input } from './Input';
import { PopupWithForm } from './PopupWithForm';
import { useContext, useState, useEffect, FC } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {IValues, IErrors, IValidity, IUser} from "../types/interfaces"
import { EditProfilePopupProps } from '../types/types';

export const EditProfilePopup: FC<EditProfilePopupProps> = ({ isOpen, onUpdateUser, isLoading, onClose }) => {
  const currentUser : IUser = useContext(CurrentUserContext);
  const [values, setValues] = useState<IValues>({});
  const [errors, setErrors] = useState<IErrors>({});
  const [validly, setValidly] = useState<IValidity>({});

  useEffect(() => {
    setValues({ name: currentUser.name, about: currentUser.about });
    setErrors({ name: '', about: '' });
    setValidly({ name: true, about: true });
  }, [currentUser, isOpen]);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity, validationMessage } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setValidly({ ...validly, [name]: validity.valid });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdateUser(values, e);
  };

  const buttonText = isLoading ? 'Сохранение...' : 'Сохранить';

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Редактировать профиль"
      buttonText={buttonText}
      onSubmit={handleSubmit}
      onClose={onClose}
      isDisabled={!(validly.name && validly.about)}
    >
      <Input
        name="name"
        placeholder="Введите имя"
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
        name="about"
        placeholder="Введите профессию"
        type="text"
        value={values.about}
        handleChange={handleChange}
        required
        minLength={2}
        maxLength={200}
        autoComplete="off"
        validationMessage={errors.about}
      />
    </PopupWithForm>
  );
};
