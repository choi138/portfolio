import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { LiStyle, LinkStyle, colors } from 'src/styles';

import { Tag } from '../Tag';

export interface SectionProps {
  title: string;
  date: string;
  description: string;
  link?: string;
  tag: string[];
}

export const Section: React.FC<SectionProps> = ({ title, date, link, description, tag }) => {
  return (
    <LiStyle>
      <TextContainer alignItems="center" columnGap={1}>
        <Text size={1.4} weight={400} color="#424242">
          {title}
        </Text>
        <Text size={0.9} weight={400} color={colors.darkGray}>
          {date}
        </Text>
      </TextContainer>
      <TextContainer flexDirection="column" rowGap={0.4}>
        {link ? (
          <>
            <Text size={0.9} color={colors.darkGray} weight={300} lineHeight={1.4}>
              {description}
              <br />
              <LinkStyle href={link} target="_blank" rel="noreferrer">
                {link}
              </LinkStyle>
            </Text>
          </>
        ) : (
          <Text size={0.9} color={colors.darkGray} weight={300}>
            {description}
          </Text>
        )}
        <Tag tagList={tag} />
      </TextContainer>
    </LiStyle>
  );
};
