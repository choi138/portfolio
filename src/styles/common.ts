import styled from '@emotion/styled';

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
