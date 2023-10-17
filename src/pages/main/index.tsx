import React, { useEffect } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { Awards, Introduce, Main, Project, Study } from 'src/components';
import { useHandleSection, useModal } from 'src/hooks';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const { modalState } = useModal();
  const { page, sectionsRef, handleNext, handlePrev } = useHandleSection();

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.location.reload();
    });

    return () =>
      window.removeEventListener('resize', () => {
        window.location.reload();
      });
  }, []);

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
        <Awards />
      </S.MainPageSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[4] = el!)} isHidden={modalState}>
        <S.NavbarContainer opacity={page !== 0 ? 1 : 0}>
          <BiLeftArrowAlt size={30} onClick={handlePrev} />
          <S.NavbarRightIcon size={30} onClick={handleNext} opacity={page === 4 ? 0 : 1} />
        </S.NavbarContainer>
        <Project />
      </S.MainPageSection>
    </>
  );
};
