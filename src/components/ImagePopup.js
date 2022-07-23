import { ImagePopupStyled } from './styled/Popup.styled';
import { ToggleButton } from './styled/Buttons.styled';
import { Container, Overlay } from './styled/Container.styled';

export const ImagePopup = ({ card, onClose }) => (
	<ImagePopupStyled isOpen={card.isOpen}>
		<Overlay onClick={onClose} />
		<Container>
			<ToggleButton onClick={onClose} />
			<img src={card.link} alt={card.name} />
			<h2>{card.name}</h2>
		</Container>
	</ImagePopupStyled>
);
