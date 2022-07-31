import { FC, ReactNode} from 'react';
import { Popup } from '../styled/Popup.styled';
import { ToggleButton, SubmitPopupButton } from '../styled/Buttons.styled';
import { ToggleIcon } from "../icons/ToggleIcon";
import { Overlay } from '../styled/Container.styled';
import { PopupProps } from '../types/types';

export const PopupWithForm : FC<PopupProps> = ({ 
  title,
  isOpen,
  children,
  onClose,
  buttonText,
  onSubmit,
  isDisabled,
}) => (
    <Popup isOpen={isOpen}>
      <Overlay onClick={onClose} />
      <form noValidate onSubmit={onSubmit}>
        <ToggleButton onClick={onClose}>
          <ToggleIcon />
        </ToggleButton>
        <h2>{title}</h2>
        <fieldset>{children}</fieldset>
        <SubmitPopupButton isDisabled={isDisabled} disabled={isDisabled}>
          {buttonText}
        </SubmitPopupButton>
      </form>
    </Popup>
  );

