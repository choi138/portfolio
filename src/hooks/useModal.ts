import { useRecoilState } from 'recoil';

import { ModalAtom } from 'src/atoms/modal';

export const useModal = () => {
  const [modalState, setModalState] = useRecoilState(ModalAtom);

  const openModal = () => {
    setModalState({ isOpen: true });
  };

  const closeModal = () => {
    setModalState({ isOpen: false });
  };

  return { modalState, openModal, closeModal };
};
