import React from 'react';

import { Text } from '@choi138/react-text';

import { colors } from 'src/styles';

export interface TitleProps {
  title: string;
  subTitle?: string;
}

export const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <Text size={1.8} weight={400} color="#212121" style={{ margin: '1rem 0' }}>
      {title}
      {subTitle && (
        <>
          <br />
          <Text size={1} style={{ marginTop: '1rem' }} color={colors.darkGray} weight={400}>
            {subTitle}
          </Text>
        </>
      )}
    </Text>
  );
};
