import styled from '@emotion/styled';

export const IntroduceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 0 2rem;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const IntroduceSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  padding-top: 3rem;
`;

export const IntroduceLink = styled.a`
  text-decoration: none;
  color: #5e63c7;
  background-image: linear-gradient(90deg, #5e63c7, #5e63c7);
  background-repeat: no-repeat;
  background-position: 0 100%; // 위, 아래
  background-size: 0 0.0625em; // 가로, 세로
  transition: background-size 0.5s;
  &:hover {
    background-size: 100% 0.0625em;
  }
`;

export const IntroduceImageContainer = styled.div`
  display: flex;
  column-gap: 0.4rem;
`;

export const IntroduceImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const IntroduceProjectImage = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;
