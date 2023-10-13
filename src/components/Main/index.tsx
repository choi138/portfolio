import React, { useEffect } from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { animation } from 'src/utils';
import { BackgroundImage } from 'src/assets';
import { colors } from 'src/styles';

import * as S from './styled';

export interface MainProps {
  handleNext: () => void;
}

export const Main: React.FC<MainProps> = ({ handleNext }) => {
  useEffect(() => {
    const handleLoad = () => {
      animation('bgCanvas');
    };

    handleLoad();

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <>
      <S.MainBottomImage src={BackgroundImage} />
      <S.MainCanvas id="bgCanvas"></S.MainCanvas>
      <TextContainer
        style={{ position: 'relative', zIndex: 2 }}
        rowGap={1}
        alignItems="center"
        flexDirection="column"
      >
        <TextContainer>
          <S.MainText>
            끊임없이 배우고 성장하는 <br />
          </S.MainText>
        </TextContainer>
        <S.MainText>
          FE 개발자 <S.MainTextWrapper>최근원</S.MainTextWrapper>입니다.
        </S.MainText>
      </TextContainer>
      <TextContainer
        style={{ position: 'relative', zIndex: 3 }}
        flexDirection="column"
        rowGap={1.6}
      >
        <S.MainIconContainer onClick={handleNext}>
          <S.MainIcon />
          <S.MainIcon />
          <S.MainIcon />
        </S.MainIconContainer>
        <Text size={0.8} color={colors.white} weight={500}>
          클릭하여 시작하기
        </Text>
      </TextContainer>
    </>
  );
};
