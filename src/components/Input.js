import { InputStyled, Error } from './styled/Input.styled';

export const Input = ({ className, name, value, handleChange, validationMessage, ...props }) => (
	<>
		<InputStyled
			{...props}
			color="#000"
			margin="13px 0 0"
			name={name}
			value={value || ''}
			onChange={handleChange}
		/>
		<Error name={name}>{validationMessage}</Error>
	</>
);
