import React from 'react';

import { useHandleSection } from 'src/hooks';
import { Main } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const { sectionsRef, handleNext, hanlePrev } = useHandleSection();

  return (
    <>
      <S.MainPageBgSection ref={(el) => (sectionsRef.current[0] = el!)}>
        <Main handleNext={handleNext} />
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
