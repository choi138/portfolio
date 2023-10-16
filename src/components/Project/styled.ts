import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const ProjectContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const ProjectSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 2rem;
  grid-auto-rows: min-content;
`;

export const ProjectBox = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius: 6px;
  border: 1px solid ${colors.softWhite};
  transition: border 0.4s ease;
  &:hover {
    border: 1px solid ${colors.primary};
    & > :first-child {
      color: ${colors.primary};
    }
  }
`;
