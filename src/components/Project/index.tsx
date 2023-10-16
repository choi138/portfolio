import React from 'react';

import { Text } from '@choi138/react-text';

import { PROJECT_LIST } from 'src/constant/project';

import { Tag, Title } from '../common';

import * as S from './styled';

export const Project: React.FC = () => {
  return (
    <>
      <Title title="🗂️ 지난 프로젝트" subTitle="지금까지 이런걸 해왔어요" />
      <S.ProjectContainer>
        {PROJECT_LIST.map(({ projectTitle, project }) => (
          <>
            <Text size={1.5}>{projectTitle}</Text>
            <S.ProjectSection>
              {project.map(({ title, date, description, tag }) => (
                <S.ProjectBox>
                  <Text size={0.8} weight={400} color="#9e9e9e">
                    {date}
                  </Text>
                  <Text size={1.5} weight={400}>
                    {title}
                  </Text>
                  <Text size={1} weight={300}>
                    {description}
                  </Text>
                  <Tag tagList={tag} />
                </S.ProjectBox>
              ))}
            </S.ProjectSection>
          </>
        ))}
      </S.ProjectContainer>
    </>
  );
};
