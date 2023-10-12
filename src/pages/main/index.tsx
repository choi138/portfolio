import React, { useState, useRef, useEffect } from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { BackgroundImage } from 'src/assets';
import { colors } from 'src/styles';
import { animation } from 'src/utils';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const handleNext = () => {
    if (currentSection === sectionsRef.current.length - 1) return;
    setCurrentSection((prev) => prev + 1);
    sectionsRef.current[currentSection + 1].scrollIntoView({
      behavior: 'smooth',
    });
  };

  const hanlePrev = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
    sectionsRef.current[currentSection - 1].scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = BackgroundImage;

    // Check if the image is already cached (loaded)
    if (!BackgroundImage) {
      console.log('cached');
      // window loading
      window.onload = () => {
        animation('bgCanvas');
      };
    } else {
      animation('bgCanvas');
    }

    return () => {
      bgImage.removeEventListener('load', () => {
        animation('bgCanvas');
      });
    };
  }, []);

  return (
    <>
      <S.MainPageBgSection ref={(el) => (sectionsRef.current[0] = el!)}>
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
            <TextContainer alignItems="center">
              FE 개발자 <S.MainPageTextWrapper>최근원</S.MainPageTextWrapper>입니다.
            </TextContainer>
          </Text>
        </TextContainer>
        <S.MainPageIconContainer onClick={handleNext}>
          <S.MainPageIcon />
          <S.MainPageIcon />
          <S.MainPageIcon />
        </S.MainPageIconContainer>
      </S.MainPageBgSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[1] = el!)}>
        <button onClick={hanlePrev}>prev</button> This is MainPage 1 section{' '}
        <button onClick={handleNext}>next</button>
      </S.MainPageSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[2] = el!)}>
        <button onClick={hanlePrev}>prev</button> This is MainPage 2 section{' '}
      </S.MainPageSection>
    </>
  );
};
