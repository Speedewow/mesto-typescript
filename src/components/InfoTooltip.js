import { Popup } from './styled/Popup.styled';
import { ToggleButton } from './styled/Buttons.styled';
import { Overlay } from './styled/Container.styled';

export const InfoTooltip = ({ info, onClose }) => (
	<Popup isOpen={info.isOpen}>
		<Overlay onClick={onClose} />
		<form>
			<ToggleButton onClick={onClose} />
			<img src={info.link} alt={info.text} />
			<h2>{info.text}</h2>
		</form>
	</Popup>
);
