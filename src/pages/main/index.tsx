import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <TextContainer flexDirection="column" rowGap={1.2}>
        <Text size={2.6} weight={800}>
          더 나은 서비스를 만들기 위해, 노력하는 개발자 최근원입니다.
        </Text>
        <Text size={1.3} weight={400}>
          언제나 사용자의 입장에서 생각하며,
          <br />
          사용자가 편리한 서비스를 만들기 위해 끊임없이 고민합니다.
        </Text>
      </TextContainer>
      <Text size={2} weight={700} style={{ alignSelf: 'flex-start' }}>
        지난 프로젝트.
      </Text>
    </S.MainPageContainer>
  );
};
