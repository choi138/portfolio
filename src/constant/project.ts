import * as I from 'src/assets';

import { NEXT_JS, PNPM, REACT_JS, REACT_NATIVE, RECOIL, TYPESCRIPT } from './skillName';
import { StudyItems } from './study';

export interface ProjectItems extends StudyItems {
  bgImg?: string;
  images?: string[];
  video?: string;
  doing?: string[];
}

export const PROJECT_LIST: ProjectItems[] = [
  {
    title: '한움',
    date: '2023.09.02 ~ ',
    description: '한세고의 모든 정보를 알려주는 한세고 도우미 앱, 한움',
    tag: [TYPESCRIPT, REACT_NATIVE, REACT_JS, 'React-Native-Qrcode-Scanner', 'Yarn'],
    images: [
      I.Hanum1Png,
      I.Hanum2Png,
      I.Hanum3Png,
      I.Hanum4Png,
      I.Hanum5Png,
      I.Hanum6Png,
      I.Hanum7Png,
      I.Hanum8Png,
      I.Hanum9Png,
      I.Hanum10Png,
      I.Hanum11Png,
      I.Hanum12Png,
      I.Hanum13Png,
      I.Hanum14Png,
    ],
  },
  {
    title: '한움 축제 부스 대쉬보드',
    date: '2023.09.07 ~ 2023.09.21',
    description: '2023년 한세고 축제 부스 대쉬보드',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', RECOIL, PNPM],
    images: [I.HanumBooth1Png, I.HanumBooth2Png, I.HanumBooth3Png],
  },
  {
    title: '우리, 함께 (한세톤 수상작)',
    date: '2023.07.21 ~ 2023.07.21',
    description: '취미가 같은 사람들이 모이는 플랫폼 "우리, 함께" 웹 사이트',
    tag: [
      TYPESCRIPT,
      REACT_JS,
      'React-Leaflet-Location-Picker',
      'Styled-Components',
      RECOIL,
      'Vite',
    ],
    images: [I.weTogetherAvif],
  },
  {
    title: '한북',
    date: '2023.04.17 ~ 2023.06.26 (이후 유지보수)',
    description: '한세고의 동아리 책 관리 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'Framer-Motion', 'React-Lottie', 'Vite'],
    images: [
      I.Hanbook1Png,
      I.Hanbook2Png,
      I.Hanbook3Png,
      I.Hanbook4Png,
      I.Hanbook5Png,
      I.Hanbook6Png,
      I.Hanbook7Png,
      I.Hanbook8Png,
      I.Hanbook9Png,
      I.Hanbook10Png,
      I.Hanbook11Png,
      I.Hanbook12Png,
      I.Hanbook13Png,
      I.Hanbook14Png,
    ],
  },
  {
    title: '학생회 신입부원 모집 사이트',
    date: '2023.03.03 ~ 2023.03.20',
    description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', 'Yarn'],
    images: [I.Hanowl1Png, I.Hanowl2Png, I.Hanowl3Png, I.Hanowl4Png, I.Hanowl5Png],
  },
  {
    title: '보안관제 동아리 모집 사이트',
    date: '2023.02.11 ~ 2023.03.05 (이후 유지보수)',
    description: '2023년 보안관제 동아리 신입부원 모집과 소개 홈페이지',
    tag: [TYPESCRIPT, NEXT_JS, 'React-Hook-Form', 'Prisma', 'MySQL'],
    images: [
      I.Hsoc1Png,
      I.Hsoc2Png,
      I.Hsoc3Png,
      I.Hsoc4Png,
      I.Hsoc5Png,
      I.Hsoc6Png,
      I.Hsoc7Png,
      I.Hsoc8Png,
      I.Hsoc9Png,
    ],
  },
  {
    title: 'FMCC',
    date: '2022.12.14 ~ 2023.02.09',
    description: '영화 기본 정보와 예고편을 볼 수 있는 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'React-Query', RECOIL],
    images: [I.Fmcc1Png, I.Fmcc2Png, I.Fmcc3Png],
  },
];
