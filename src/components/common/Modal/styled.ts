import styled from '@emotion/styled';

import { colors } from 'src/styles';

export const ModalWrapper = styled.div`
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
  width: 44rem;
  height: 34rem;
  overflow: auto;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
