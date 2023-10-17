import * as I from 'src/assets';

import { NEXT_JS, PNPM, REACT_JS, REACT_NATIVE, RECOIL, TYPESCRIPT } from './skillName';
import { StudyItems } from './study';

export interface ProjectItems extends StudyItems {
  modalImg?: string;
  images?: string[];
  video?: string;
  link?: string;
  github: string;
  appStore?: string;
  playStore?: string;
  doing?: string[];
}

export const PROJECT_LIST: ProjectItems[] = [
  {
    title: '한움 (진행 중)',
    date: '2023.09.02 ~ ',
    description: '한세고의 모든 정보를 알려주는 한세고 도우미 앱, 한움',
    tag: [TYPESCRIPT, REACT_NATIVE, REACT_JS, 'React-Native-Qrcode-Scanner', 'Yarn'],
    modalImg: I.HanumModalSvg,
    appStore: 'https://apps.apple.com/us/app/%ED%95%9C%EC%9B%80/',
    playStore: 'https://play.google.com/store/apps/details?id=com.hanowl.hanum',
    github: 'https://github.com/hansei-hanum/hanum-frontend',
    images: [
      I.Hanum1Svg,
      I.Hanum2Svg,
      I.Hanum3Svg,
      I.Hanum4Svg,
      I.Hanum5Svg,
      I.Hanum6Svg,
      I.Hanum7Svg,
      I.Hanum8Svg,
      I.Hanum9Svg,
      I.Hanum10Svg,
      I.Hanum11Svg,
      I.Hanum12Svg,
      I.Hanum13Svg,
      I.Hanum14Svg,
    ],
  },
  {
    title: '한움 축제 부스 대시보드',
    date: '2023.09.07 ~ 2023.09.21',
    description: '2023년 한세고 축제 부스 대시보드',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', RECOIL, PNPM],
    github: 'https://github.com/hansei-hanum/hanum-pay-dashboard',
    modalImg: I.HanumModalSvg,
    images: [I.HanumBooth1Svg, I.HanumBooth2Svg, I.HanumBooth3Svg],
  },
  {
    title: '우리, 함께 (한세톤 수상작)',
    date: '2023.07.21 ~ 2023.07.21',
    description: '취미가 같은 사람들이 모이는 플랫폼 "우리, 함께"',
    tag: [
      TYPESCRIPT,
      REACT_JS,
      'React-Leaflet-Location-Picker',
      'Styled-Components',
      RECOIL,
      'Vite',
    ],
    github: 'https://github.com/hanseithonkk/wetogether.react.front',
    modalImg: I.WeTogetherModalSvg,
    images: [I.weTogetherAvif],
  },
  {
    title: '한북',
    date: '2023.04.17 ~ 2023.06.26 (이후 유지보수)',
    description: '한세고의 동아리 책 관리 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'Framer-Motion', 'React-Lottie', 'Vite'],
    github: 'https://github.com/hansei-book-management/hanbook-frontend',
    link: 'https://hanbook.hsoc.kr/',
    modalImg: I.Hanbook1Svg,
    images: [
      I.Hanbook1Svg,
      I.Hanbook2Svg,
      I.Hanbook3Svg,
      I.Hanbook4Svg,
      I.Hanbook5Svg,
      I.Hanbook6Svg,
      I.Hanbook7Svg,
      I.Hanbook8Svg,
      I.Hanbook9Svg,
      I.Hanbook10Svg,
      I.Hanbook11Svg,
      I.Hanbook12Svg,
      I.Hanbook13Svg,
      I.Hanbook14Svg,
    ],
  },
  {
    title: '학생회 신입부원 모집 사이트',
    date: '2023.03.03 ~ 2023.03.20',
    description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', 'Yarn'],
    github: 'https://github.com/hanowwl/recruit.hanowl.com',
    link: 'https://recruit.hanowl.com',
    modalImg: I.HanowlLogoSvg,
    images: [I.Hanowl1Svg, I.Hanowl2Svg, I.Hanowl3Svg, I.Hanowl4Svg, I.Hanowl5Svg],
  },
  {
    title: '보안관제 동아리 모집 사이트',
    date: '2023.02.11 ~ 2023.03.05 (이후 유지보수)',
    description: '2023년 보안관제 동아리 신입부원 모집과 소개 홈페이지',
    tag: [TYPESCRIPT, NEXT_JS, 'React-Hook-Form', 'Prisma', 'MySQL'],
    github: 'https://github.com/hansei-hsoc/hsoc-homepage-2023',
    link: 'https://hsoc.kr',
    modalImg: I.HsocModalSvg,
    images: [
      I.Hsoc1Svg,
      I.Hsoc2Svg,
      I.Hsoc3Svg,
      I.Hsoc4Svg,
      I.Hsoc5Svg,
      I.Hsoc6Svg,
      I.Hsoc7Svg,
      I.Hsoc8Svg,
      I.Hsoc9Svg,
    ],
  },
  {
    title: 'FMCC',
    date: '2022.12.14 ~ 2023.02.09',
    description: '영화 기본 정보와 예고편을 볼 수 있는 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'React-Query', RECOIL],
    github: 'https://github.com/MovieWebP/fmcc-frontend',
    modalImg: I.Fmcc1Svg,
    images: [I.Fmcc1Svg, I.Fmcc2Svg, I.Fmcc3Svg, I.Fmcc4Svg, I.Fmcc5Svg],
  },
];
