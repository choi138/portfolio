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
      <S.MainPageBottomImage src={BackgroundImage} />
      <S.MainPageCanvas id="bgCanvas"></S.MainPageCanvas>
      <TextContainer
        style={{ position: 'relative', zIndex: 2 }}
        rowGap={1}
        alignItems="center"
        flexDirection="column"
      >
        <TextContainer>
          <Text size={3.4} color={colors.white} weight={600}>
            끊임없이 배우고 성장하는 <br />
          </Text>
        </TextContainer>
        <Text size={3.4} color={colors.white} weight={600}>
          FE 개발자 <S.MainPageTextWrapper>최근원</S.MainPageTextWrapper>입니다.
        </Text>
      </TextContainer>
      <TextContainer
        style={{ position: 'relative', zIndex: 3 }}
        flexDirection="column"
        rowGap={1.6}
      >
        <S.MainPageIconContainer onClick={handleNext}>
          <S.MainPageIcon />
          <S.MainPageIcon />
          <S.MainPageIcon />
        </S.MainPageIconContainer>
        <Text size={0.8} color={colors.white} weight={500}>
          클릭하여 시작하기
        </Text>
      </TextContainer>
    </>
  );
};
