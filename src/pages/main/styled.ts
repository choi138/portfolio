import { FiChevronRight } from 'react-icons/fi';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const MainPageContainer = styled.div`
  display: flex;
  scroll-behavior: smooth;
`;

export const MainPageSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  overflow-y: auto;
`;

export const MainPageBgSection = styled(MainPageSection)`
  background: linear-gradient(0deg, #4c52c0 61%, #1c156a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 5rem;
`;

export const MainPageBottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
`;

export const MainPageCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 0;
`;

const translate = keyframes`
0% {
    opacity: 1;
}
100% {
    opacity: .8;
}
`;

export const MainPageTextWrapper = styled.div`
  padding: 10px;
  background-color: ${colors.white};
  width: fit-content;
  color: #5452b8;
  margin: 0 0.8rem;
  border-radius: 0.4rem;
  transition:
    color 1s,
    background-color 1s;
  animation: ${translate} 2s ease-in-out infinite alternate;
  &:hover {
    background-color: transparent;
    color: ${colors.white};
  }
`;

const move = keyframes`
0% {
    transform: translateX(40px);
}
25% {
    opacity: 1;
}
33% {
    opacity: 1;
    transform: translateX(65px); /* Adjusted translateX value */
  }
  67% {
    opacity: 1;
    transform: translateX(80px); /* Adjusted translateX value */
  }
  100% {
    opacity: 0;
    transform: translateX(100px) scale3d(0.5, 0.5, 0.5); /* Adjusted translateX value */
  }
`;

export const MainPageIconContainer = styled.div`
  z-index: 3;
  position: relative;
  right: 5.5rem;
  display: flex;
  align-items: center;
  column-gap: 10rem;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  & > :first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }
  & > :nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }
`;

export const MainPageIcon = styled(FiChevronRight)`
  position: absolute;
  color: ${colors.white};
  width: 2.6rem;
  height: 2.6rem;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: ${move} 3s ease-out infinite;
`;
