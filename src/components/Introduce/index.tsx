import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { SchoolLogoPng } from 'src/assets';
import { ABOUT_ME_LIST, PROJECT_LIST } from 'src/constant';

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
        <Text size={0.9} color="#616161" weight={300}>
          <S.IntroduceLink href="mailto:kidjustinchoi@gmail.com" target="_blank" rel="noreferrer">
            kidjustinchoi@gmail.com
          </S.IntroduceLink>
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
        <Text size={0.92} color="#5E63C7" weight={400}>
          <S.IntroduceLink href="https://hansei.sen.hs.kr/" target="_blank" rel="noreferrer">
            한세사이버보안고등학교 (재학중)
          </S.IntroduceLink>
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
          <S.IntroduceUl>
            {INTRODUCE_LIST.map(({ title, value, content }) => (
              <S.IntroduceLi key={title}>
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
              </S.IntroduceLi>
            ))}
          </S.IntroduceUl>
        </S.IntroduceSection>
        <S.IntroduceSection>
          {ABOUT_ME_LIST.map(({ title, subTitle, date, description, tag, link }) => (
            <S.IntroduceUl>
              <S.IntroduceLi>
                <Text size={1.7} weight={400}>
                  {title}
                </Text>
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
                        <S.IntroduceLink href={link} target="_blank" rel="noreferrer">
                          {link}
                        </S.IntroduceLink>
                      </Text>
                    </>
                  ) : (
                    <Text size={0.9} color="#616161" weight={300}>
                      {description}
                    </Text>
                  )}
                  <Text size={0.8} color="#9e9e9e" weight={400}>
                    {tag.map((item) => `#${item} `)}
                  </Text>
                </TextContainer>
              </S.IntroduceLi>
            </S.IntroduceUl>
          ))}
        </S.IntroduceSection>
      </S.IntroduceContainer>
    </>
  );
};
