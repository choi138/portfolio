import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { SchoolLogoPng } from 'src/assets';
import { PROJECT_LIST } from 'src/constant';

import * as S from './styled';

export const Introduce: React.FC = () => {
  return (
    <>
      <Text size={3} weight={700} style={{ margin: '1rem' }}>
        프로필 소개
      </Text>
      <S.IntroduceSection>
        <S.IntroduceArticle>
          <S.IntroduceUl>
            <S.IntroduceLi>
              <Text size={1.5} weight={400} color="#424242">
                이름
              </Text>
              <Text size={0.9} color="#616161" weight={300}>
                최근원
              </Text>
            </S.IntroduceLi>
            <S.IntroduceLi>
              <Text size={1.5} weight={400} color="#424242">
                이메일
              </Text>
              <Text size={0.9} color="#616161" weight={300}>
                <S.IntroduceLink href="mailto:kidjustinchoi@gmail.com">
                  kidjustinchoi@gmail.com
                </S.IntroduceLink>
              </Text>
            </S.IntroduceLi>
            <S.IntroduceLi>
              <Text size={1.5} weight={400} color="#424242">
                나이
              </Text>
              <Text size={0.9} color="#616161" weight={300}>
                2006.05.24 (18세) 🇰🇷
              </Text>
            </S.IntroduceLi>
            <S.IntroduceLi>
              <Text size={1.5} weight={400} color="#424242">
                학력
              </Text>
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
            </S.IntroduceLi>
            <S.IntroduceLi>
              <Text size={1.5} weight={400} color="#424242">
                활동
              </Text>
              <S.IntroduceImageContainer>
                {PROJECT_LIST.map(({ image, href }) => (
                  <a href={href} target="_blank" rel="noreferrer" key={href} title="Project-image">
                    <S.IntroduceProjectImage src={image} />
                  </a>
                ))}
              </S.IntroduceImageContainer>
            </S.IntroduceLi>
          </S.IntroduceUl>
        </S.IntroduceArticle>
      </S.IntroduceSection>
    </>
  );
};
