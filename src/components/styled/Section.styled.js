import styled from 'styled-components';

export const Section = styled.section`
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	color: #fff;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	margin: 0 0 15px;

	@media screen and (min-width: 600px) {
		display: none;
	}
`;
