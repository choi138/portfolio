import React, { useState } from 'react';

import { Text } from '@choi138/react-text';
import { AnimatePresence } from 'framer-motion';

import { PROJECT_LIST, ProjectItems } from 'src/constant';

import { Modal, Tag, Title } from '../common';

import * as S from './styled';

export type ModalStateProps = Partial<ProjectItems> & {
  isOpen: boolean;
};

export const Project: React.FC = () => {
  const [modal, setModal] = useState<ModalStateProps>({ isOpen: false });

  return (
    <>
      <Title title="🗂️ 지난 프로젝트" subTitle="지금까지 이런걸 해왔어요" />
      <S.ProjectSection>
        {PROJECT_LIST.map((project) => (
          <S.ProjectBox
            onClick={() => {
              setModal({ isOpen: true, ...project });
            }}
            key={project.title}
          >
            <S.ProjectBoxHeader className="project-box-header">
              <Text size={0.8} weight={400} color="#9e9e9e">
                {project.date}
              </Text>
              <Text size={0.8} weight={400} color="#9e9e9e">
                더 보기 클릭
              </Text>
            </S.ProjectBoxHeader>
            <Text size={1.5} weight={400}>
              {project.title}
            </Text>
            <Text size={1} weight={300}>
              {project.description}
            </Text>
            <Tag tagList={project.tag} />
          </S.ProjectBox>
        ))}
      </S.ProjectSection>
      <AnimatePresence>
        {modal.isOpen && <Modal modal={modal} setModal={setModal} />}
      </AnimatePresence>
    </>
  );
};
