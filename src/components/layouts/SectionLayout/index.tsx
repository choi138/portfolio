import React, { useEffect, useRef } from 'react';

import * as S from './styled';
export interface SectionLayoutProps {
  children: React.ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!layoutRef.current) return;
    layoutRef.current.scrollTo(0, 0);
  }, [children]);

  return <S.SectionLayoutContainer ref={layoutRef}>{children}</S.SectionLayoutContainer>;
};
