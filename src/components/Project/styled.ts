import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const ProjectSection = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 2rem;
  grid-auto-rows: min-content;
  @media screen and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectBox = styled.div`
  margin: 1rem 0;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 6px;
  border: 1px solid ${colors.softWhite};
  transition: border 0.4s ease;
  &:hover {
    border: 1px solid ${colors.primary};
    & > :first-of-type {
      color: ${colors.primary};
    }
  }
`;
