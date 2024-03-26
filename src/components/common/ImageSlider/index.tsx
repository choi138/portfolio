import React, { useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import * as S from './styled';

export interface ImageSliderProps {
  images: string[];
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  currentImage,
  setCurrentImage,
}) => {
  const imageSliderRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const getWindowSize = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  };

  const variants = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const linkSettings = {
    target: '_blank',
    rel: 'noreferrer',
  };

  // const imageWidth = imageWrapperRef.current?.clientWidth || 0;
  //   const currentImage = Math.round(Math.floor(scrollPosition) / imageWidth);

  //   if (currentImage > -1) {
  //     setCurrentImage(currentImage + 1);
  //   }

  const onScroll = (e: React.UIEvent) => {
    const newScrollPosition = e.currentTarget.scrollLeft;

    if (newScrollPosition > scrollPosition && currentImage > 0) {
      setCurrentImage((prev) => prev + 1);
    } else if (newScrollPosition < scrollPosition && currentImage <= images?.length) {
      setCurrentImage((prev) => prev - 1);
    }

    setScrollPosition(newScrollPosition);
  };

  const handlePrevClick = () => {
    if (imageSliderRef.current) {
      imageSliderRef.current.scrollLeft -= getWindowSize() / 2;
    }
  };

  const handleNextClick = () => {
    if (imageSliderRef.current) {
      imageSliderRef.current.scrollLeft += getWindowSize() / 2;
    }
  };

  return (
    <S.ImageSliderContainer>
      <S.LeftIconWrapper variants={variants} animate={currentImage !== 1 ? 'show' : 'hidden'}>
        <BsChevronLeft size={32} onClick={handlePrevClick}>
          Prev
        </BsChevronLeft>
      </S.LeftIconWrapper>
      <S.ImageSlider ref={imageSliderRef} onScroll={onScroll}>
        {images &&
          images.map((image, index) => (
            <S.ImageWrapper ref={imageWrapperRef} key={index}>
              <S.ImageLink href={image} {...linkSettings}>
                <S.Image src={image} />
              </S.ImageLink>
            </S.ImageWrapper>
          ))}
      </S.ImageSlider>
      <S.RightIconWrapper
        variants={variants}
        animate={currentImage !== images?.length ? 'show' : 'hidden'}
      >
        <BsChevronRight size={32} onClick={handleNextClick}>
          Next
        </BsChevronRight>
      </S.RightIconWrapper>
    </S.ImageSliderContainer>
  );
};
