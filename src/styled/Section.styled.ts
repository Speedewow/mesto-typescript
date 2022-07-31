import styled from 'styled-components';

export const Section = styled.section<any>`
  display: ${({ display }) => display};
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin: 15px 0;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
