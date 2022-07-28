import styled from 'styled-components';
import { colors } from './colors';

export const FooterStyled = styled.footer`
  max-width: 880px;
  margin: 0 auto;
  padding: 0 0 60px;

  p {
    font-size: 18px;
    line-height: 1.22;
    color: ${colors.gray};
  }

  @media screen and (max-width: 879px) {
    padding: 0 0 36px;
    margin: 0 19px;

    p {
      margin: 0;
      font-size: 14px;
      line-height: 1.214;
    }
  }
`;
