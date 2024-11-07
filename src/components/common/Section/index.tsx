import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { LiStyle, LinkStyle, colors } from 'src/styles';

import { Tag } from '../Tag';
import { SectionText } from '../SectionText';
import { AboutMeItems } from 'src/constant';

export interface SectionProps {
  title: string;
  date: string;
  description: string;
  link?: string;
  tag: string[];
  list?: AboutMeItems['list'];
}

export const Section: React.FC<SectionProps> = ({ title, date, link, description, tag, list }) => {
  const hasList = Boolean(list);
  console.log('hasList', hasList);
  return (
    <LiStyle>
      {!list ? (
        <TextContainer alignItems="center" columnGap={1} style={{ flexWrap: 'wrap' }}>
          <Text size={1.4} weight={400} color="#424242">
            {title}
          </Text>
          <Text size={0.9} weight={400} color={colors.darkGray}>
            {date}
          </Text>
        </TextContainer>
      ) : (
        list.map(({ title, date }) => (
          <TextContainer alignItems="center" columnGap={0.6} style={{ flexWrap: 'wrap' }}>
            <Text size={1.2} weight={400} color="#424242">
              {title}
            </Text>
            <Text size={0.7} weight={400} color={colors.darkGray}>
              {date}
            </Text>
          </TextContainer>
        ))
      )}
      <TextContainer flexDirection="column" rowGap={0.4}>
        {link ? (
          <>
            <SectionText description={description} />
            <LinkStyle href={link} target="_blank" rel="noreferrer">
              {link}
            </LinkStyle>
          </>
        ) : (
          <SectionText description={description} />
        )}
        <Tag tagList={tag} />
      </TextContainer>
    </LiStyle>
  );
};
