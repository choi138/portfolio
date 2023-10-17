import { useRecoilState } from 'recoil';

import { ModalState } from 'src/atoms/modal';

export const useModal = () => {
  const [modalState, setModalState] = useRecoilState(ModalState);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return { modalState, openModal, closeModal };
};
