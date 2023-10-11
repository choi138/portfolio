import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { BackgroundImage } from 'src/assets';

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
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MainPageBottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export const MainPageTextWrapper = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  width: fit-content;
  color: #5452b8;
  margin: 0 0.8rem;
  border-radius: 0.4rem;
`;

const tailAnimation = keyframes`
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
`;

const shootingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(300px);
  }
`;

// Styled Components
export const Night = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateZ(130deg);
`;

export const ShootingStar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: #5f91ff;
  border-radius: 999px;
  animation:
    ${tailAnimation} 1300ms ease-in-out infinite,
    ${shootingAnimation} 1300ms ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    height: 1000px;
    background: #5f91ff;
    border-radius: 100%;
  }

  &::before {
    left: 0;
    transform: translateX(50%) rotateZ(45deg);
  }

  &::after {
    right: 0;
    transform: translateX(50%) rotateZ(-45deg);
  }
`;

const generateShootingStar = (top: string, left: string, delay: string) => styled(ShootingStar)`
  top: calc(20% - ${top});
  left: calc(20% - ${left});
  animation-delay: ${delay};
`;
export const ShootingStar1 = generateShootingStar('-43px', '-35px', '9586ms');
export const ShootingStar2 = generateShootingStar('-197px', '-189px', '9121ms');
export const ShootingStar3 = generateShootingStar('-144px', '-88px', '225ms');
// export const ShootingStar4 = generateShootingStar(-160px, -44px, '7925ms');
// export const ShootingStar5 = generateShootingStar(-170px, -300px, '53ms');
// export const ShootingStar6 = generateShootingStar(-189px, -216px, '6474ms');
// export const ShootingStar7 = generateShootingStar(-83px, -17px, '6425ms');
// export const ShootingStar8 = generateShootingStar(-146px, -223px, '6887ms');
// export const ShootingStar9 = generateShootingStar(-111px, -158px, '6762ms');
// export const ShootingStar10 = generateShootingStar(-144px, -88px, '1565ms');
