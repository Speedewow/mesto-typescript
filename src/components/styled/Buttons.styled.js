import styled from 'styled-components';

export const Button = styled.button`
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	background-color: transparent;
	font-size: 18px;
	line-height: 1.22;
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

export const AvatarButton = styled(Button)`
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
	border-radius: 50%;
	background-image: url();
`;

export const EditButton = styled(Button)`
	position: absolute;
	top: 15px;
	right: -45px;
	width: 24px;
	height: 24px;
	background-image: url();

	@media screen and (max-width: 917px) {
		top: 7px;
		right: -30px;
		width: 18px;
		height: 18px;
	}
`;

export const AddButton = styled(Button)`
	width: 150px;
	height: 50px;
	background-image: url();
	border: 2px solid #fff;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const LikeButton = styled(Button)`
	height: 19px;
	width: 22px;
`;

export const DeleteButton = styled(Button)`
	display: ${({ isOwn }) => (isOwn ? 'block' : 'none')};
	position: absolute;
	top: 20px;
	right: 20px;
	height: 19px;
	width: 18px;
	background-image: url(../images/cardDeleteButton.svg);
`;

export const ToggleButton = styled(Button)`
	position: absolute;
	top: -40px;
	right: -40px;
	width: 32px;
	height: 32px;
	background-image: url(../images/closeIcon.svg);

	@media screen and (max-width: 600px) {
		top: -36px;
		right: 0;
		width: 20px;
		height: 20px;
	}
`;

export const BurgerButton = styled(Button)`
	display: none;
	background-image: ${({ isActive }) => (isActive ? '#fff' : '#000')};
	width: 24px;
	margin: 0 30px 17px 0;

	@media screen and (max-width: 600px) {
		display: block;
	}
`;

export const QuitButton = styled(Button)`
	color: #a9a9a9;
`;

export const SubmitPopupButton = styled(Button)`
	width: 358px;
	height: 50px;
	border-radius: 2%;
	background-color: ${({ isDisabled }) => (isDisabled ? '#fff' : '#000')};
	color: ${({ isDisabled }) => (isDisabled ? '#000' : '#fff')};
	pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'fill')};
	border: ${({ isDisabled }) => (isDisabled ? '1px solid #000' : 'none')};

	@media screen and (max-width: 600px) {
		width: 238px;
		font-size: 14px;
		line-height: 1.214;
	}
`;

export const SubmitAuthButton = styled.button`
	margin: 200px auto 10px;
	width: 358px;
	height: 50px;
	background-color: #fff;
	color: #000;
	border-radius: 2%;

	@media screen and (max-width: 500px) {
		width: 260px;
		margin-top: 150px;
	}
`;
