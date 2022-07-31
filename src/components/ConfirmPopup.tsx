import { FC } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { ConfirmPopupProps } from '../types/types';


export const ConfirmPopup : FC<ConfirmPopupProps> = ({ card, onCardDelete, isLoading, onClose }) => {
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    onCardDelete(card, e);
    e.preventDefault();
  };

  const buttonText = isLoading ? 'Удаление...' : 'Да';

  return (
    <PopupWithForm
      isOpen={card.isOpen}
      onClose={onClose}
      title="Вы уверены?"
      buttonText={buttonText}
      onSubmit={handleSubmit}
    />
  );
};
