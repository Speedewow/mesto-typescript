import { Popup } from './styled/Popup.styled';
import { ToggleButton, SubmitPopupButton } from './styled/Buttons.styled';
import { ToggleIcon } from './icons/ToggleIcon';
import { Overlay } from './styled/Container.styled';

export const PopupWithForm = ({
  title,
  isOpen,
  children,
  onClose,
  buttonText,
  onSubmit,
  isDisabled,
}) => {
  return (
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
};
