import styled, { css } from 'styled-components';
import { colors } from './colors';

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
  background-color: ${colors.black};
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  transform: translate(40px, 13px);

  @media screen and (max-width: 917px) {
    width: 18px;
    height: 18px;
    transform: translate(25px, 9px);
  }
`;

export const AddButton = styled(Button)`
  width: 150px;
  height: 50px;
  border: 2px solid ${colors.white};

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const LikeButton = styled(Button)`
  height: 19px;
  width: 22px;
`;

export const DeleteButton = styled(Button)`
  display: ${({ display }) => display};
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ToggleButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  transform: translate(42px, -42px);

  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
    transform: translate(0, -35px);
  }
`;

export const BurgerButton = styled(Button)`
  display: none;
  margin: 10px 0 0;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const QuitButton = styled(Button)`
  color: ${colors.darkGray};
`;

export const SubmitPopupButton = styled(Button)`
  width: 358px;
  height: 50px;
  border-radius: 2%;
  background-color: ${colors.black};
  color: ${colors.white};
  pointer-events: fill;
  border: none;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: ${colors.white};
      color: ${colors.black};
      pointer-events: none;
      border: 1px solid ${colors.black}; ;
    `}

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
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 2%;

  @media screen and (max-width: 500px) {
    width: 260px;
    margin-top: 150px;
  }
`;
