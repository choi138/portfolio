import styled from '@emotion/styled';

import { colors } from './colors';

export const UlStyle = styled.ul`
  margin: 0 1rem;
  list-style-type: none;
`;

export const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 1.8rem 0;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  background-image: linear-gradient(90deg, ${colors.primary}, ${colors.primary});
  background-repeat: no-repeat;
  background-position: 0 100%; // 위, 아래
  background-size: 0 0.0625em; // 가로, 세로
  transition: background-size 0.5s;
  width: fit-content;
  &:hover {
    background-size: 100% 0.0625em;
  }
`;
