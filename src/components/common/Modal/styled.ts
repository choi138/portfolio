import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors } from 'src/styles';

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.5);
`;

export const DummyModal = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 80%;
  overflow: auto;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${colors.softWhite};
`;
