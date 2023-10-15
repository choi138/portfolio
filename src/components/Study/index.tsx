import React from 'react';

import { UlStyle } from 'src/styles';
import { ABOUT_ME_LIST } from 'src/constant';

import { Section, Title } from '../common';

export const Study: React.FC = () => {
  return (
    <>
      <Title title="📚 공부" />
      <UlStyle>
        {ABOUT_ME_LIST.map(({ subTitle, date, description, tag }) => (
          <Section subTitle={subTitle} date={date} description={description} tag={tag} />
        ))}
      </UlStyle>
    </>
  );
};
