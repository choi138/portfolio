import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import { Main } from 'src/components';
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
        This is MainPage 1 section
      </S.MainPageSection>
      <S.MainPageSection ref={(el) => (sectionsRef.current[2] = el!)}>
        {page !== 0 && (
          <S.NavbarContainer>
            <BiLeftArrowAlt size={30} onClick={handlePrev} />
            {page < 2 && <BiRightArrowAlt size={30} onClick={handleNext} />}
          </S.NavbarContainer>
        )}
        This is MainPage 2 section
      </S.MainPageSection>
    </>
  );
};
