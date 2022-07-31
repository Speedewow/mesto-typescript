import styled, { css } from 'styled-components';
import { colors } from './Colors';

export const Popup = styled.section<any>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  color: ${colors.black};

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  form {
    position: absolute;
    width: 430px;
    background-color: ${colors.white};
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
    margin: 35px 0 25px;
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
    color: ${colors.white};
    font-weight: 400;
    font-size: 12px;
    line-height: 1.25;
    text-align: left;
  }
`;
