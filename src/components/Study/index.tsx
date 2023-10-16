import React from 'react';

import { UlStyle } from 'src/styles';
import { STUDY_LIST } from 'src/constant';

import { Section, Title } from '../common';

import * as S from './styled';

export const Study: React.FC = () => {
  return (
    <>
      <Title title="📚 공부" />
      <S.StudyWrapper>
        <UlStyle>
          {STUDY_LIST.slice(0, 4).map(({ title, date, description, tag }) => (
            <Section key={title} title={title} date={date} description={description} tag={tag} />
          ))}
        </UlStyle>
        <UlStyle>
          {STUDY_LIST.slice(4).map(({ title, date, description, tag }) => (
            <Section key={title} title={title} date={date} description={description} tag={tag} />
          ))}
        </UlStyle>
      </S.StudyWrapper>
    </>
  );
};
