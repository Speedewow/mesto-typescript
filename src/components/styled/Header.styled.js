import styled from 'styled-components';

export const HeaderStyled = styled.header`
	border-bottom: 1px solid #545454;
	border-top: 1px solid #545454;
	max-width: 880px;
	padding: 45px 0 0;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	img {
		margin: 0 auto 35px 0;
		max-width: 142px;
		max-height: 33px;
		width: 100%;
	}

	a {
		margin: 0 0 15px 24px;
		font-size: 18px;
		align-self: center;
		cursor: pointer;
		text-decoration: none;
		color: #fff;
	}

	@media screen and (max-width: 879px) {
		padding: 28px 28px 0;
		img {
			margin: 0 0 27px;
			width: 105px;
		}

		a {
			margin: 0 27px 15px 24px;
			font-size: 14px;
		}
	}
`;
