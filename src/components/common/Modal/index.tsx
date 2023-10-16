import React from 'react';

import { Text } from '@choi138/react-text';

import * as S from './styled';

export const Modal: React.FC = () => {
  return (
    <S.ModalWrapper>
      <S.DummyModal onClick={() => console.log('asdf')} />
      <S.ModalContainer>
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
