import styled from 'styled-components';
import { colors } from './Colors';

export const AuthStyled = styled.section`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};

  h1 {
    margin: 60px auto;
    font-weight: 900;
    font-size: 24px;
    line-height: 1.21;
  }

  form {
    width: 358px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  @media screen and (max-width: 500px) {
    form {
      width: 260px;
    }
  }
`;
