import styled from 'styled-components';

export const Popup = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transition: visibility 0s, opacity 0.5s linear;
	color: #000;

	form {
		position: absolute;
		width: 430px;
		background-color: #fff;
		border-radius: 3%;
		padding: 34px 36px 37px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h2 {
		font-weight: 900;
		font-size: 24px;
		line-height: 1.21;
		text-align: center;
	}

	fieldset {
		width: 358px;
		height: auto;
		border: none;
		display: flex;
		flex-direction: column;
		margin: 45px 0 25px;
	}

	img {
		width: 120px;
		height: 120px;
		margin: 30px auto;
	}

	@media screen and (max-width: 600px) {
		form {
			width: 282px;
			padding: 25px 22px;
		}

		h2 {
			font-size: 18px;
			line-height: 1.22;
		}

		fieldset {
			width: 238px;
			margin: 45px 0;
		}

		@media screen and (max-width: 600px) {
			form {
				width: 282px;
				padding: 25px 22px;
			}

			h2 {
				font-size: 18px;
				line-height: 1.22;
			}

			fieldset {
				width: 238px;
				margin: 45px 0;
			}
		}
	}
`;

export const ImagePopupStyled = styled(Popup)`
	img {
		width: 100%;
		height: 100%;
		max-width: 75vw;
		max-height: 75vh;
		margin: 0;
	}

	h2 {
		color: #fff;
		font-weight: 400;
		font-size: 12px;
		line-height: 1.25;
		text-align: left;
	}
`;
