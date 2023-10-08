import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { PORTFOLIO_LIST } from 'src/constant';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <TextContainer
        flexDirection="column"
        alignItems="flex-start"
        rowGap={1.2}
        style={{ width: '100%' }}
      >
        <Text size={2.6} weight={800}>
          더 나은 서비스를 만들기 위해
          <br />
          노력하는, FE 개발자 최근원입니다.
        </Text>
        <Text size={1.3} weight={400}>
          언제나 사용자의 입장에서 생각하며,
          <br />
          사용자가 편리한 서비스를 만들기 위해 끊임없이 고민합니다.
        </Text>
      </TextContainer>
      <TextContainer
        flexDirection="column"
        rowGap={2}
        style={{ width: '100%', alignItems: 'flex-start' }}
      >
        <Text size={2} weight={700}>
          지난 프로젝트.
        </Text>
        {PORTFOLIO_LIST.map(({ title, subTitle, projects }) => (
          <S.MainPageProjectContainer>
            <TextContainer flexDirection="column" rowGap={0.8} style={{ flex: 0.5 }}>
              <Text size={1.8} weight={700}>
                {title}
              </Text>
              <Text size={0.84} weight={400} color="gray">
                {subTitle.split('\n').map((line) => (
                  <>
                    {line}
                    <br />
                  </>
                ))}
              </Text>
            </TextContainer>
            {projects.map(({ name, description }) => (
              <TextContainer flexDirection="column" rowGap={1} style={{ flex: 1 }}>
                <Text size={1.8} weight={800} lineHeight={1.3}>
                  {name}
                  <br />
                  <Text size={0.9} weight={400} color="gray">
                    {description}
                  </Text>
                </Text>
              </TextContainer>
            ))}
          </S.MainPageProjectContainer>
        ))}
      </TextContainer>
    </S.MainPageContainer>
  );
};
