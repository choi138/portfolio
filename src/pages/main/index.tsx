import React, { useRef, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { Awards, Introduce, Main, Project, Study } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const mainPageRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);

  const onScroll = (e: React.UIEvent) => {
    const scrollPosition = e.currentTarget.scrollLeft;

    const pageWidth = mainPageRef.current?.clientWidth || 0;
    const page = Math.floor(scrollPosition / pageWidth);

    setPage(page + 1);
  };

  const handlePrevClick = () => {
    if (mainPageRef.current) {
      setPage(page - 1);
      mainPageRef.current.scrollLeft -= window.innerWidth;
    }
  };

  const handleNextClick = () => {
    if (mainPageRef.current) {
      setPage(page + 1);
      mainPageRef.current.scrollLeft += window.innerWidth;
    }
  };

  return (
    <S.MainPageContainer ref={mainPageRef} onScroll={onScroll}>
      <Main handleNext={handleNextClick} />
      <Introduce />
      <Study />
      <Awards />
      <Project />
      <S.NavbarContainer opacity={page !== 1 ? 1 : 0}>
        <BiLeftArrowAlt size={30} onClick={handlePrevClick} />
        <S.NavbarRightIcon size={30} onClick={handleNextClick} opacity={page === 5 ? 0 : 1} />
      </S.NavbarContainer>
    </S.MainPageContainer>
  );
};
