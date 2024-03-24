import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors } from 'src/styles';

export const ImageSliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  column-gap: 1.4rem;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  float: left;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const ImageLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 40rem;
  border-radius: 10px;
  border: 1px solid ${colors.softWhite};
`;

export const RightIconWrapper = styled(motion.div)`
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const LeftIconWrapper = styled(motion.div)`
  @media screen and (max-width: 680px) {
    display: none;
  }
`;
