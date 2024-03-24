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
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 680px) {
    width: 90%;
    height: 90%;
  }
`;

export const ModalMainImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 0.2px solid ${colors.darkGray};
`;

export const ModalSectionContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -ktml-user-select: none;
`;

export const ModalUl = styled.ul`
  list-style: disc;
  padding-left: 1rem;
  & > li:first-of-type {
    margin-top: 0.6rem;
  }
  & > li:last-of-type {
    margin-bottom: 0;
  }
`;

export const ModalLi = styled.li`
  font-size: 1rem;
  display: list-item;
  margin-bottom: 0.8rem;
`;

export const ModalImageContainer = styled(ModalSection)`
  border-top: 0.2px solid ${colors.darkGray};
  padding: 2rem;
  padding-top: 1rem;
  row-gap: 1.4rem;
`;

export const ModalLinkContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;
