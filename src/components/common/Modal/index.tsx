import React from 'react';

import { Text, TextContainer } from '@choi138/react-text';

import { ModalStateProps } from 'src/components/Project';
import { colors } from 'src/styles';

import * as S from './styled';

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<ModalStateProps>>;
  modal: ModalStateProps;
}

export const Modal: React.FC<ModalProps> = ({ setModal, modal }) => {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <S.ModalWrapper
      animate={modal.isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.12 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.DummyModal
        onClick={() => {
          setModal({ isOpen: false });
        }}
      />
      <S.ModalContainer>
        <S.ModalMainImage src={modal.modalImg} />
        <S.ModalSectionContainer>
          <S.ModalSection>
            <Text size={0.9} weight={400} color={colors.gray}>
              {modal.date}
            </Text>
            <TextContainer justifyContent="space-between" alignItems="center">
              <Text size={1.5} weight={600}>
                {modal.title}
              </Text>
              <div>
                <Text size={0.8}>{modal.github}</Text>
                <Text size={0.8}>{modal.link ? 'git' : 'site'}</Text>
              </div>
            </TextContainer>
            <Text size={1} weight={400} color={colors.gray}>
              {modal.description}
            </Text>
          </S.ModalSection>
          <S.ModalSection>
            <Text size={1.4} weight={600}>
              사용 기술
            </Text>
            <TextContainer columnGap={0.4}>
              <Text size={1} weight={400}>
                {modal.tag?.join(', ')}
              </Text>
            </TextContainer>
          </S.ModalSection>
          <S.ModalSection>
            <Text size={1.4} weight={600}>
              이런걸 했어요
            </Text>
            <S.ModalUl>
              {modal.doing?.map((item) => <S.ModalLi key={item}>{item}</S.ModalLi>)}
            </S.ModalUl>
          </S.ModalSection>
        </S.ModalSectionContainer>
        <S.ModalSection>
          <S.ModalImageContainer>
            <S.ModalImage src={modal.images && modal.images[0]} />
          </S.ModalImageContainer>
        </S.ModalSection>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};
