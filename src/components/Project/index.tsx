import React, { useState } from 'react';

import { Text } from '@choi138/react-text';
import { AnimatePresence } from 'framer-motion';

import { PROJECT_LIST } from 'src/constant/project';
import { useModal } from 'src/hooks';

import { Modal, Tag, Title } from '../common';

import * as S from './styled';

export const Project: React.FC = () => {
  const { modalState, openModal } = useModal();
  return (
    <>
      <Title title="🗂️ 지난 프로젝트" subTitle="지금까지 이런걸 해왔어요" />
      <S.ProjectSection>
        {PROJECT_LIST.map(({ title, date, description, tag }) => (
          <S.ProjectBox onClick={openModal}>
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
      <AnimatePresence>{modalState && <Modal />}</AnimatePresence>
    </>
  );
};
