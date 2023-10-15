import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { SchoolLogoPng } from 'src/assets';
import { ABOUT_ME_LIST, PROJECT_LIST } from 'src/constant';
import { LiStyle, LinkStyle, UlStyle } from 'src/styles';

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
    value: '2006.05.24 (18세) 🇰🇷',
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
          <Text size={0.82} color="#616161" weight={400}>
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
          {PROJECT_LIST.map(({ image, href }) => (
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
    <>
      <Text size={3} weight={700} style={{ margin: '1rem' }}>
        프로필 소개
      </Text>
      <S.IntroduceContainer>
        <S.IntroduceSection>
          <UlStyle>
            {INTRODUCE_LIST.map(({ title, value, content }) => (
              <LiStyle key={title}>
                <Text size={1.5} weight={400} color="#424242">
                  {title}
                </Text>
                {content ? (
                  content
                ) : (
                  <Text size={0.9} color="#616161" weight={300}>
                    {value}
                  </Text>
                )}
              </LiStyle>
            ))}
          </UlStyle>
        </S.IntroduceSection>
        <S.IntroduceSection>
          {ABOUT_ME_LIST.map(({ title, subTitle, date, description, tag, link }) => (
            <>
              <Text size={1.7} weight={400} key={date}>
                {title}
              </Text>
              <UlStyle key={title}>
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
              </UlStyle>
            </>
          ))}
        </S.IntroduceSection>
      </S.IntroduceContainer>
    </>
  );
};
