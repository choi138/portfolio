import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { Title } from '../common';

import * as S from './styled';

export const Project: React.FC = () => {
  return (
    <>
      <Title title="🗂️ 지난 프로젝트" subTitle="지금까지 이런걸 해왔어요" />
      <S.ProjectContainer>
        <Text size={1.5}>학생회 한울</Text>
        <S.ProjectSection>
          <S.ProjectBox>
            <Text size={0.8} weight={400} color="#9e9e9e">
              2023.03.03 ~ 2023.03.20
            </Text>
            <Text size={1.5} weight={400}>
              학생회 신입부원 모집 사이트
            </Text>
            <Text size={1} weight={300}>
              2023년 학생회 신입부원 모집을 위한 홈페이지
            </Text>
            <TextContainer columnGap={0.4} style={{ flexWrap: 'wrap' }}>
              <Text size={0.8} color="#9e9e9e" weight={400}>
                #React.js, TypeScript
              </Text>
            </TextContainer>
          </S.ProjectBox>
        </S.ProjectSection>
      </S.ProjectContainer>
    </>
  );
};
