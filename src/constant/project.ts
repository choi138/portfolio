import * as I from 'src/assets';

import { NEXT_JS, PNPM, REACT_JS, REACT_NATIVE, RECOIL, TYPESCRIPT } from './skillName';
import { StudyItems } from './study';

export interface ProjectItems extends StudyItems {
  modalImg?: string;
  images: string[];
  video?: string;
  link?: string;
  github: string;
  appStore?: string;
  playStore?: string;
  doing: string[];
}

export const PROJECT_LIST: ProjectItems[] = [
  {
    title: '@choi138/react-text',
    date: '2023.10.07 ~ ',
    description: 'React 텍스트 라이브러리',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', 'Prettier', PNPM],
    doing: [
      '매번 Text 컴포넌트를 만들다보니 불편함을 느껴서 만들게 되었습니다.',
      'Rem을 사용하여 반응형으로 구현하였습니다.',
      'Emotion을 사용하여 스타일링을 하였습니다.',
    ],
    modalImg: I.ReactTextModalWebp,
    images: [I.ReactText1Webp, I.ReactText2Webp, I.ReactText3Webp],
    github: 'https://github.com/choi138/react-text',
  },
  {
    title: '한움 (진행 중)',
    date: '2023.09.02 ~ ',
    description: '한세고의 모든 정보를 알려주는 한세고 도우미 앱, 한움',
    tag: [TYPESCRIPT, REACT_NATIVE, 'React-Native-Qrcode-Scanner', 'Yarn'],
    doing: [
      '한움 프로젝트의 프론트 1인 개발을 담당했습니다.',
      'QR 인식 기능을 추가하여 축제때 부스의 결제를 모두 QR로 진행하였습니다.',
      '한세어울리마당 부분을 하루안에 완성해야하는 상황속에서 빠르게 개발하였습니다.',
      '한세어울림마당에 실시간 투표 기능을 추가 하였고, 행사 당일 모두 정상적으로 잘 작동했습니다.',
    ],
    modalImg: I.HanumModalWebp,
    appStore: 'https://apps.apple.com/kr/app/%ED%95%9C%EC%9B%80/id6463776026?l',
    playStore: 'https://play.google.com/store/apps/details?id=com.hanowl.hanum',
    github: 'https://github.com/hansei-hanum/hanum-frontend',
    images: [
      I.Hanum1Webp,
      I.Hanum2Webp,
      I.Hanum3Webp,
      I.Hanum4Webp,
      I.Hanum5Webp,
      I.Hanum6Webp,
      I.Hanum7Webp,
      I.Hanum8Webp,
      I.Hanum9Webp,
      I.Hanum10Webp,
      I.Hanum11Webp,
      I.Hanum12Webp,
      I.Hanum13Webp,
      I.Hanum14Webp,
    ],
  },
  {
    title: '한움 축제 부스 대시보드',
    date: '2023.09.07 ~ 2023.09.21',
    description: '2023년 한세고 축제 부스 대시보드',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', RECOIL, PNPM],
    doing: [
      '부스의 키를 입력하면 총 잔액을 보여주고, 결제 내역을 확인하는 기능을 구현했습니다.',
      '혹여나 잘못 결제가 된 경우를 대비해, 환불 기능을 구현했습니다.',
    ],
    link: 'https://dash-pay.hanum.us/',
    github: 'https://github.com/hansei-hanum/hanum-pay-dashboard',
    modalImg: I.HanumModalWebp,
    images: [I.HanumBooth1Webp, I.HanumBooth2Webp, I.HanumBooth3Webp],
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
    doing: [
      '우리, 함께 프로젝트의 프론트 1인 개발을 담당했습니다.',
      'React-Leaflet 라이브러리를 사용하여 지도 기능을 구현했습니다.',
      '사용자의 위치를 지도에 표시하는 기능을 구현했습니다.',
      'PWA를 사용하여 웹을 앱처럼 사용할 수 있게 구현했습니다.',
    ],
    github: 'https://github.com/hanseithonkk/wetogether.react.front',
    modalImg: I.WeTogetherModalWebp,
    images: [I.weTogetherAvif],
  },
  {
    title: '한북',
    date: '2023.04.17 ~ 2023.06.26 (이후 유지보수)',
    description: '한세고의 동아리 책 관리 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'Framer-Motion', 'React-Lottie', 'Vite'],
    doing: [
      '한북 프로젝트의 프론트 1인 개발을 담당했습니다.',
      '기한과 횟수 제한을 통한 동아리 코드를 통해 동아리별로 책을 빌릴 수 있게 구현했습니다.',
      '학교 안에서만 반납할 수 있게 구현했습니다.',
      '처음으로 백엔드와 통신을 React Query를 사용하여 하였습니다.',
    ],
    github: 'https://github.com/hansei-book-management/hanbook-frontend',
    link: 'https://hanbook.hsoc.kr/',
    modalImg: I.Hanbook1Webp,
    images: [
      I.Hanbook1Webp,
      I.Hanbook2Webp,
      I.Hanbook3Webp,
      I.Hanbook4Webp,
      I.Hanbook5Webp,
      I.Hanbook6Webp,
      I.Hanbook7Webp,
      I.Hanbook8Webp,
      I.Hanbook9Webp,
      I.Hanbook10Webp,
      I.Hanbook11Webp,
      I.Hanbook12Webp,
      I.Hanbook13Webp,
      I.Hanbook14Webp,
    ],
  },
  {
    title: '학생회 신입부원 모집 사이트',
    date: '2023.03.03 ~ 2023.03.20',
    description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', 'Prettier', 'Yarn'],
    doing: [
      '첫 협업으로 Emotion, ESLint 그리고 Prettier를 사용하는 계기가 되었습니다.',
      '선배님들의 코드 리뷰를 통해 코드를 깔끔하게 작성하는 방법을 배웠습니다.',
      '많은 리스트들을 사용하여 반복되는 코드를 줄였습니다.',
      '절대 경로를 설정하여 import를 편하게 할 수 있게 구현했습니다.',
    ],
    github: 'https://github.com/hanowwl/recruit.hanowl.com',
    link: 'https://recruit.hanowl.com',
    modalImg: I.HanowlLogoWebp,
    images: [I.Hanowl1Webp, I.Hanowl2Webp, I.Hanowl3Webp, I.Hanowl4Webp, I.Hanowl5Webp],
  },
  {
    title: '보안관제 동아리 모집 사이트 (풀스택)',
    date: '2023.02.11 ~ 2023.03.05 (이후 유지보수)',
    description: '2023년 보안관제 동아리 신입부원 모집과 소개 홈페이지',
    tag: [TYPESCRIPT, NEXT_JS, 'React-Hook-Form', 'Prisma', 'MySQL'],
    doing: [
      '프론트, 백엔드, 서버 배포까지 모두 1인 개발을 담당했습니다.',
      'Next.js를 사용하여 SSR을 방식을 사용했습니다.',
      'Prisma를 사용하여 데이터베이스 구축과 백엔드 개발을 담당했습니다.',
    ],
    github: 'https://github.com/hansei-hsoc/hsoc-homepage-2023',
    link: 'https://hsoc.kr',
    modalImg: I.HsocModalWebp,
    images: [
      I.Hsoc1Webp,
      I.Hsoc2Webp,
      I.Hsoc3Webp,
      I.Hsoc4Webp,
      I.Hsoc5Webp,
      I.Hsoc6Webp,
      I.Hsoc7Webp,
      I.Hsoc8Webp,
      I.Hsoc9Webp,
    ],
  },
  {
    title: 'FMCC',
    date: '2022.12.14 ~ 2023.02.09',
    description: '영화 기본 정보와 예고편을 볼 수 있는 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'React-Query', RECOIL],
    doing: [
      '1인 개발을 담당했습니다.',
      '처음으로 직접 사이트를 만들어보았습니다.',
      'TMDB API를 사용하여 영화 정보를 가져왔습니다.',
      'React-Slick을 사용하여 슬라이더를 구현했습니다.',
    ],
    github: 'https://github.com/MovieWebP/fmcc-frontend',
    modalImg: I.Fmcc1Webp,
    images: [I.Fmcc1Webp, I.Fmcc2Webp, I.Fmcc3Webp, I.Fmcc4Webp, I.Fmcc5Webp],
  },
];
