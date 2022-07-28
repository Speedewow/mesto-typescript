import styled from 'styled-components';
import { colors } from './colors';

export const Cards = styled.section`
  margin: 0 auto;
  color: ${colors.black};

  ul {
    max-width: 880px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px 17px;
  }

  li {
    background-color: ${colors.white};
    border-radius: 3%;
    position: relative;
    width: 282px;
    height: 370px;
    list-style: none;
  }

  img {
    width: 282px;
    height: 282px;
    min-height: 282px;
    border-radius: 3% 3% 0 0;
    margin: 0;
    padding: 0;
    object-fit: cover;
    cursor: pointer;
  }

  h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 1.21;
    max-width: 85%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  span {
    font-size: 13px;
    line-height: 16px;
  }

  @media screen and (max-width: 917px) {
    ul {
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(3, 1fr);
      gap: 20px 25px;
    }
  }
  @media screen and (max-width: 630px) {
    ul {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      row-gap: 20px;
    }
  }
`;
