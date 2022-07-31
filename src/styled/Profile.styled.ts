import styled from 'styled-components';

export const Profile = styled.section`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    border-radius: 50%;
  }

  h1 {
    max-width: 220px;
    font-weight: 500;
    font-size: 42px;
    line-height: 1.14;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    text-align: left;
    font-size: 18px;
    line-height: 1.22;
    margin: 7px auto 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 917px) {
    padding: 20px;
    h1 {
      font-size: 27px;
      line-height: 1.22;
    }

    p {
      font-size: 14px;
      line-height: 1.214;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-width: 300px;
    margin: auto;
  }
`;
