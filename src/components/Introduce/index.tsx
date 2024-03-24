import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { SchoolLogoPng } from 'src/assets';
import { ABOUT_ME_LIST, ACTIVITY_LIST } from 'src/constant';
import { LinkStyle, UlStyle, colors } from 'src/styles';

import { Section, Title } from '../common';
import { SectionLayout } from '../layouts';

import * as S from './styled';

export interface IntroduceItems {
  title: string;
  value?: string;
  content?: React.ReactNode;
}

export const INTRODUCE_LIST: IntroduceItems[] = [
  {
    title: '이름',
    value: '최근원',
  },
  {
    title: '이메일',
    content: (
      <>
        <Text size={0.9} weight={300}>
          <LinkStyle href="mailto:kidjustinchoi@gmail.com" target="_blank" rel="noreferrer">
            kidjustinchoi@gmail.com
          </LinkStyle>
        </Text>
      </>
    ),
  },
  {
    title: '나이',
    value: '2006.05.24 🇰🇷',
  },
  {
    title: '학력',
    content: (
      <>
        <Text size={0.92} weight={400}>
          <LinkStyle href="https://hansei.sen.hs.kr/" target="_blank" rel="noreferrer">
            한세사이버보안고등학교 (재학중)
          </LinkStyle>
        </Text>
        <TextContainer columnGap={0.8}>
          <S.IntroduceImage src={SchoolLogoPng} />
          <Text size={0.82} color={colors.darkGray} weight={400}>
            2022.03 ~
          </Text>
        </TextContainer>
      </>
    ),
  },
  {
    title: '활동',
    content: (
      <>
        <S.IntroduceImageContainer>
          {ACTIVITY_LIST.map(({ image, href }) => (
            <a href={href} target="_blank" rel="noreferrer" key={href} title="Project-image">
              <S.IntroduceProjectImage src={image} />
            </a>
          ))}
        </S.IntroduceImageContainer>
      </>
    ),
  },
];

export const Introduce: React.FC = () => {
  return (
    <SectionLayout>
      <S.IntroduceTitle>프로필 소개</S.IntroduceTitle>
      <S.IntroduceContainer>
        <S.IntroduceSection>
          <UlStyle>
            {INTRODUCE_LIST.map(({ title, value, content }) => (
              <S.IntroduceLi key={title}>
                <Text size={1.5} weight={400} color="#424242">
                  {title}
                </Text>
                {content ? (
                  content
                ) : (
                  <Text size={0.9} color={colors.darkGray} weight={300}>
                    {value}
                  </Text>
                )}
              </S.IntroduceLi>
            ))}
          </UlStyle>
        </S.IntroduceSection>
        <S.IntroduceSection>
          {ABOUT_ME_LIST.map(({ title, subTitle, date, description, tag, link }) => (
            <article>
              <Title title={title} key={title} />
              <UlStyle key={subTitle}>
                <Section
                  title={subTitle}
                  date={date}
                  description={description}
                  tag={tag}
                  link={link}
                />
              </UlStyle>
            </article>
          ))}
        </S.IntroduceSection>
      </S.IntroduceContainer>
    </SectionLayout>
  );
};
