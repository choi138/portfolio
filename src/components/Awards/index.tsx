import React from 'react';

import { UlStyle } from 'src/styles';
import { AWARD_LIST } from 'src/constant';

import { Section, Title } from '../common';
import { SectionLayout } from '../layouts';

import * as S from './styled';

export const Awards: React.FC = () => {
  return (
    <SectionLayout>
      <Title title="🏆 수상 및 경력" />
      <S.StudyWrapper>
        <UlStyle>
          {AWARD_LIST.slice(0, 3).map(({ title, date, description, tag }) => (
            <Section key={title} title={title} date={date} description={description} tag={tag} />
          ))}
        </UlStyle>
        <UlStyle>
          {AWARD_LIST.slice(3).map(({ title, date, description, tag }) => (
            <Section key={title} title={title} date={date} description={description} tag={tag} />
          ))}
        </UlStyle>
      </S.StudyWrapper>
    </SectionLayout>
  );
};
