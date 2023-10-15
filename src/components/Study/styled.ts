import styled from '@emotion/styled';

export const StudyWrapper = styled.div`
  padding-top: 1.4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 0 2rem;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;
