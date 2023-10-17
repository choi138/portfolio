import React from 'react';

import { Text } from '@choi138/react-text';

import { useModal } from 'src/hooks';
import { Fmcc1Svg } from 'src/assets';

import * as S from './styled';

export const Modal: React.FC = () => {
  const { modalState, closeModal } = useModal();

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <S.ModalWrapper
      animate={modalState ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.12 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.DummyModal onClick={closeModal} />
      <S.ModalContainer>
        <S.ModalImage src={Fmcc1Svg} />
        <Text size={1.5} weight={400}>
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝
          이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝
          이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
          <br />
          📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf 📝
          이력서sadfsadfsafsafdsafdasfdsafdsaf 📝 이력서sadfsadfsafsafdsafdasfdsafdsaf
        </Text>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};
