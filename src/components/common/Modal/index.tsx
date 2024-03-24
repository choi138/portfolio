import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';
import { FaAppStoreIos } from 'react-icons/fa';

import { Text, TextContainer } from '@choi138/react-text';

import { ModalStateProps } from 'src/components/Project';
import { colors } from 'src/styles';

import { ImageSlider } from '../ImageSlider';

import * as S from './styled';

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<ModalStateProps>>;
  modal: ModalStateProps;
}

export const Modal: React.FC<ModalProps> = ({ setModal, modal }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const linkSettings = {
    target: '_blank',
    rel: 'noreferrer',
  };

  const variants = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <S.ModalWrapper
      animate={modal.isOpen ? 'show' : 'hidden'}
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
              <S.ModalLinkContainer>
                <a href={modal.github} {...linkSettings} title="git">
                  <BsGithub size={'2rem'} color={colors.black} />
                </a>
                {modal.link && (
                  <a href={modal.link} {...linkSettings} title="link">
                    <FiExternalLink size={'2rem'} color={colors.black} />
                  </a>
                )}
                {modal.appStore && (
                  <a href={modal.appStore} {...linkSettings} title="app">
                    <FaAppStoreIos size={'2.1rem'} color={colors.black} />
                  </a>
                )}
                {modal.playStore && (
                  <a href={modal.playStore} {...linkSettings} title="play">
                    <BiLogoPlayStore size={'2.3rem'} color={colors.black} />
                  </a>
                )}
              </S.ModalLinkContainer>
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
        <S.ModalImageContainer>
          <Text size={0.9} weight={400}>
            {currentImage}/{modal.images && modal.images?.length}
          </Text>
          <ImageSlider
            images={modal.images || []}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        </S.ModalImageContainer>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};
