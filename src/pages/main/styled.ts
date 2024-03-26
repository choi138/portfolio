import { BiRightArrowAlt } from 'react-icons/bi';

import styled from '@emotion/styled';

export const MainPageContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  overflow-y: hidden;
  /* overflow: hidden; */
`;

export const NavbarContainer = styled.div<{ opacity?: number }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.25s;
  opacity: ${({ opacity }) => opacity};
  @media screen and (max-width: 1023px) {
    backdrop-filter: blur(10px);
  }
`;

export const NavbarRightIcon = styled(BiRightArrowAlt)<{ opacity?: number }>`
  transition: opacity 0.25s;
  opacity: ${({ opacity }) => opacity};
`;
