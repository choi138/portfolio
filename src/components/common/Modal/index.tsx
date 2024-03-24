import React, { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight, BsGithub } from 'react-icons/bs';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FiExternalLink } from 'react-icons/fi';
import { FaAppStoreIos } from 'react-icons/fa';

import { Text, TextContainer } from '@choi138/react-text';

import { ModalStateProps } from 'src/components/Project';
import { colors } from 'src/styles';
import { useGetWindowSize } from 'src/hooks';

import * as S from './styled';

export interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<ModalStateProps>>;
  modal: ModalStateProps;
}

export const Modal: React.FC<ModalProps> = ({ setModal, modal }) => {
  const { windowSize } = useGetWindowSize();
  const [currentImage, setCurrentImage] = useState(1);
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const isMobile = windowSize <= 767;

  const onScroll = (e: React.UIEvent) => {
    const scrollPosition = e.currentTarget.scrollLeft;

    const imageWidth = imageWrapperRef.current?.clientWidth || 0;
    const currentImage = Math.floor(scrollPosition / imageWidth);

    setCurrentImage(currentImage + 1);
  };

  const handlePrevClick = () => {
    if (imageSliderRef.current) {
      currentImage !== 1 && setCurrentImage((prev) => prev - 1);
      imageSliderRef.current.scrollLeft -= windowSize / 2;
    }
  };

  const handleNextClick = () => {
    if (imageSliderRef.current) {
      currentImage !== modal.images?.length && setCurrentImage((prev) => prev + 1);
      imageSliderRef.current.scrollLeft += windowSize / 2;
    }
  };

  const variants = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const linkSettings = {
    target: '_blank',
    rel: 'noreferrer',
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
          <S.ModalImageSliderContainer>
            {!isMobile && (
              <S.leftIconWrapper
                variants={variants}
                animate={currentImage !== 1 ? 'show' : 'hidden'}
              >
                <BsChevronLeft size={32} onClick={handlePrevClick}>
                  Prev
                </BsChevronLeft>
              </S.leftIconWrapper>
            )}
            <S.ModalImageSliderWrapper>
              <S.ModalImageSliderInnerContainer ref={imageSliderRef} onScroll={onScroll}>
                {modal.images &&
                  modal.images.map((image, index) => (
                    <S.ModalImageWrapper ref={imageWrapperRef} key={index}>
                      <S.ModalImageLink href={image} {...linkSettings}>
                        <S.ModalImage src={image} />
                      </S.ModalImageLink>
                    </S.ModalImageWrapper>
                  ))}
              </S.ModalImageSliderInnerContainer>
            </S.ModalImageSliderWrapper>
            {!isMobile && (
              <S.rightIconWrapper
                variants={variants}
                animate={currentImage !== modal.images?.length ? 'show' : 'hidden'}
              >
                <BsChevronRight size={32} onClick={handleNextClick}>
                  Next
                </BsChevronRight>
              </S.rightIconWrapper>
            )}
          </S.ModalImageSliderContainer>
        </S.ModalImageContainer>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};
