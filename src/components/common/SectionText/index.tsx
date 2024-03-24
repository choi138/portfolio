import React from 'react';

import { Text } from '@choi138/react-text';

import { colors } from 'src/styles';

export interface SectionTextProps {
  description: string;
}

export const SectionText: React.FC<SectionTextProps> = ({ description }) => {
  return (
    <Text size={0.9} color={colors.darkGray} weight={300} lineHeight={1.4}>
      {description.includes('\n')
        ? description.split('\n').map((line) => (
            <React.Fragment key={line}>
              {line}
              <br />
            </React.Fragment>
          ))
        : description}
    </Text>
  );
};
