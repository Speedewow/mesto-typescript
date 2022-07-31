import { FC } from 'react';
import { ImagePopupStyled } from '../styled/Popup.styled';
import { ToggleButton } from '../styled/Buttons.styled';
import { ToggleIcon } from '../icons/ToggleIcon';
import { Container, Overlay } from '../styled/Container.styled';
import { ImagePopupProps } from '../types/types';

export const ImagePopup : FC<ImagePopupProps> = ({ card, onClose }) => (
  <ImagePopupStyled isOpen={card.isOpen}>
    <Overlay onClick={onClose} />
    <Container>
      <ToggleButton onClick={onClose}>
        <ToggleIcon />
      </ToggleButton>
      <img src={card.link} alt={card.name} />
      <h2>{card.name}</h2>
    </Container>
  </ImagePopupStyled>
);
