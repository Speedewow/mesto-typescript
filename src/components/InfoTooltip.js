import { Popup } from './styled/Popup.styled';
import { ToggleButton } from './styled/Buttons.styled';
import { ToggleIcon } from './icons/ToggleIcon';
import { Overlay } from './styled/Container.styled';
import { InfoSuccessIcon, InfoFailureIcon } from './icons/InfoIcon';

export const InfoTooltip = ({ info, onClose }) => (
  <Popup isOpen={info.isOpen}>
    <Overlay onClick={onClose} />
    <form>
      <ToggleButton onClick={onClose}>
        <ToggleIcon />
      </ToggleButton>
      {info.isSuccess ? <InfoSuccessIcon /> : <InfoFailureIcon />}
      <h2>{info.text}</h2>
    </form>
  </Popup>
);
