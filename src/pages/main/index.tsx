import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { Introduce, Main, Study } from 'src/components';
import { useHandleSection } from 'src/hooks';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const { page, sectionsRef, handleNext, handlePrev } = useHandleSection();

  return (
    <>
      <S.MainPageBgSection ref={(el) => (sectionsRef.current[0] = el!)}>
        <Main handleNext={handleNext} />
      </S.MainPageBgSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[1] = el!)}>
        <Introduce />
      </S.MainPageSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[2] = el!)}>
        <Study />
      </S.MainPageSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[3] = el!)}>
        This is MainPage 3 section
      </S.MainPageSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[4] = el!)}>
        <S.NavbarContainer opacity={page !== 0 ? 1 : 0}>
          <BiLeftArrowAlt size={30} onClick={handlePrev} />
          <S.NavbarRightIcon size={30} onClick={handleNext} opacity={page === 4 ? 0 : 1} />
        </S.NavbarContainer>
        This is MainPage 4 section
      </S.MainPageSection>
    </>
  );
};
