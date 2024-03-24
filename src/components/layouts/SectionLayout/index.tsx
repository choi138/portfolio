import React from 'react';

import * as S from './styled';
export interface SectionLayoutProps {
  children: React.ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ children }) => {
  return <S.SectionLayoutContainer>{children}</S.SectionLayoutContainer>;
};
