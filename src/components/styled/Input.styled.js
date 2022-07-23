import styled from 'styled-components';

export const InputStyled = styled.input`
	margin: ${({ margin }) => margin};
	color: ${({ color }) => color};
	font-size: 14px;
	line-height: 1.214;
	padding: 0 0 10px 0;
	border: none;
	border-bottom: 2px solid #ccc;
	outline: none;
	background-color: transparent;

	&:focus {
		border-bottom: 2px solid #ccc;
	}
`;

export const Error = styled.span`
	margin-top: 5px;
	color: #ff0000;
	font-size: 10px;
	height: 10px;
`;
