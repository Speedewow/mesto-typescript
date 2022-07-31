import styled from 'styled-components';
import { colors } from './Colors';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid ${colors.gray};
  border-top: 1px solid ${colors.gray};
  max-width: 880px;
  padding: 45px 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-size: 18px;
    align-self: center;
    cursor: pointer;
    text-decoration: none;
    color: ${colors.white};
  }

  @media screen and (max-width: 879px) {
    padding: 28px 28px 20px;

    a {
      font-size: 14px;
    }
  }
`;
