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
  padding: 1rem;
  @media screen and (max-width: 1023px) {
    padding: 0;
  }
`;

export const IntroduceTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin: 1rem;
  @media screen and (max-width: 1023px) {
    margin: 0;
  }
`;

export const IntroduceImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const IntroduceLi = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 1.8rem 0;
  &:first-of-type {
    margin-top: 1rem;
  }
`;
