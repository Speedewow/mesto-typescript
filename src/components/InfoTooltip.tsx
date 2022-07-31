import { FC } from 'react';
import { Popup } from '../styled/Popup.styled';
import { ToggleButton } from '../styled/Buttons.styled';
import { ToggleIcon } from '../icons/ToggleIcon';
import { Overlay } from '../styled/Container.styled';
import { InfoSuccessIcon, InfoFailureIcon } from '../icons/InfoIcon';
import {IInfo} from "../types/interfaces"

type Props = {
  info: IInfo;
  onClose: (e : React.MouseEvent<HTMLElement>) => void;
}

export const InfoTooltip: FC<Props> = ({ info, onClose }) => (
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
