import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { LiStyle, LinkStyle } from 'src/styles';

export interface SectionProps {
  subTitle: string;
  date: string;
  description: string;
  link?: string;
  tag: string[];
}

export const Section: React.FC<SectionProps> = ({ subTitle, date, link, description, tag }) => {
  return (
    <LiStyle>
      <TextContainer alignItems="center" columnGap={1}>
        <Text size={1.5} weight={400} color="#424242">
          {subTitle}
        </Text>
        <Text size={0.9} weight={400} color="#616161">
          {date}
        </Text>
      </TextContainer>
      <TextContainer flexDirection="column" rowGap={0.4}>
        {link ? (
          <>
            <Text size={0.9} color="#616161" weight={300} lineHeight={1.4}>
              {description}
              <br />
              <LinkStyle href={link} target="_blank" rel="noreferrer">
                {link}
              </LinkStyle>
            </Text>
          </>
        ) : (
          <Text size={0.9} color="#616161" weight={300}>
            {description}
          </Text>
        )}
        <TextContainer columnGap={0.4}>
          {tag.map((item) => (
            <Text size={0.8} color="#9e9e9e" weight={400} key={item}>
              #{item}
            </Text>
          ))}
        </TextContainer>
      </TextContainer>
    </LiStyle>
  );
};
