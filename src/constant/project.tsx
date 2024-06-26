import React from 'react';

import {
  EMOTION,
  NEXT_JS,
  PNPM,
  REACT_JS,
  REACT_NATIVE,
  RECOIL,
  TYPESCRIPT,
  PRETTIER,
  NESTJS,
} from './skillName';
import { StudyItems } from './study';

export interface ProjectItems extends StudyItems {
  modalImg?: string;
  images: string[];
  video?: string;
  link?: string;
  github: string;
  appStore?: string;
  playStore?: string;
  doing: string[] | React.ReactNode[];
}

export const PROJECT_LIST: ProjectItems[] = [
  {
    title: '한움 (진행 중)',
    date: '2023.09.02 ~ 최근 업데이트 (2024.03.21)',
    description: '한세고의 모든 정보를 알려주는 한세고 도우미 앱, 한움',
    tag: [TYPESCRIPT, REACT_NATIVE, 'React-Native-Qrcode-Scanner', 'Yarn'],
    doing: [
      <>
        현재 한세고의 모든 학생들이 사용하는 학교 대표 앱 <strong>"한움"</strong>을 개발하였습니다.
      </>,
      '학사일정, 시간표, 급식표, 대나무숲(커뮤니티) 등의 학교 관련 기능들을 전부 개발하였습니다.',
      '대나무숲 기능까지 한움 프로젝트의 프론트 1인 개발을 담당했습니다.',
      '기기의 테마 색깔을 가져와 그에 맞는 테마 색깔을 적용하였습니다.',
      '바텀 시트 라이브러리의 버그로 인해 직접 바텀 시트를 구현하였습니다.',
      '대나무 숲의 무한 스크롤 기능을 구현하였습니다',
      '학생회 신청 백엔드의 이슈로 인해 4시간만에 Api 연결을 해야하는 상황이 있었지만 성공적으로 해결하였습니다.',
      'QR 인식 기능을 추가하여 축제때 부스의 결제를 모두 QR로 진행하였습니다.',
      '한세어울리마당 부분을 하루안에 완성해야하는 상황속에서 빠르게 개발하였습니다.',
      '한세어울림마당에 실시간 투표 기능을 추가 하였고, 행사 당일 모두 정상적으로 잘 작동했습니다.',
    ],
    modalImg: 'https://cdn.choi138.com/projects/hanum/modal.webp',
    appStore: 'https://apps.apple.com/kr/app/%ED%95%9C%EC%9B%80/id6463776026?l',
    playStore: 'https://play.google.com/store/apps/details?id=com.hanowl.hanum',
    github: 'https://github.com/hansei-hanum/hanum-frontend',
    images: [
      'https://cdn.choi138.com/projects/hanum/1.webp',
      'https://cdn.choi138.com/projects/hanum/2.webp',
      'https://cdn.choi138.com/projects/hanum/3.webp',
      'https://cdn.choi138.com/projects/hanum/4.webp',
      'https://cdn.choi138.com/projects/hanum/5.webp',
      'https://cdn.choi138.com/projects/hanum/6.webp',
      'https://cdn.choi138.com/projects/hanum/7.webp',
      'https://cdn.choi138.com/projects/hanum/8.webp',
      'https://cdn.choi138.com/projects/hanum/9.webp',
      'https://cdn.choi138.com/projects/hanum/10.webp',
      'https://cdn.choi138.com/projects/hanum/11.webp',
      'https://cdn.choi138.com/projects/hanum/12.webp',
      'https://cdn.choi138.com/projects/hanum/13.webp',
      'https://cdn.choi138.com/projects/hanum/14.webp',
      'https://cdn.choi138.com/projects/hanum/15.webp',
      'https://cdn.choi138.com/projects/hanum/16.webp',
      'https://cdn.choi138.com/projects/hanum/17.webp',
      'https://cdn.choi138.com/projects/hanum/18.webp',
      'https://cdn.choi138.com/projects/hanum/19.webp',
      'https://cdn.choi138.com/projects/hanum/20.webp',
      'https://cdn.choi138.com/projects/hanum/21.webp',
      'https://cdn.choi138.com/projects/hanum/22.webp',
      'https://cdn.choi138.com/projects/hanum/23.webp',
      'https://cdn.choi138.com/projects/hanum/24.webp',
      'https://cdn.choi138.com/projects/hanum/25.webp',
      'https://cdn.choi138.com/projects/hanum/26.webp',
      'https://cdn.choi138.com/projects/hanum/27.webp',
      'https://cdn.choi138.com/projects/hanum/28.webp',
      'https://cdn.choi138.com/projects/hanum/29.webp',
      'https://cdn.choi138.com/projects/hanum/30.webp',
      'https://cdn.choi138.com/projects/hanum/31.webp',
      'https://cdn.choi138.com/projects/hanum/32.webp',
      'https://cdn.choi138.com/projects/hanum/33.webp',
      'https://cdn.choi138.com/projects/hanum/34.webp',
    ],
  },
  {
    title: '2024 학생회 소개 사이트',
    date: '2024.02.22 ~ 2024.03.21',
    description: '2024년 학생회 소개와 지원을 위한 홈페이지',
    tag: [TYPESCRIPT, REACT_JS, NEXT_JS, 'Zustand', 'Framer Motion'],
    doing: [
      '웹 앱을 구현하였습니다',
      'Zustand를 사용하여 앱 인식을 하였습니다',
      '앱 인식 여부에 따른 스타일링 변화를 주었습니다',
      'Framer Motion을 사용하여 숫자 count 애니메이션과 fade-in 애니메이션을 구현하였습니다',
    ],
    modalImg: 'https://cdn.choi138.com/projects/recruit.hanowl.com/logo.webp',
    images: [
      'https://cdn.choi138.com/projects/hanowl.com/1.webp',
      'https://cdn.choi138.com/projects/hanowl.com/2.webp',
      'https://cdn.choi138.com/projects/hanowl.com/3.webp',
      'https://cdn.choi138.com/projects/hanowl.com/4.webp',
      'https://cdn.choi138.com/projects/hanowl.com/5.webp',
      'https://cdn.choi138.com/projects/hanowl.com/6.webp',
      'https://cdn.choi138.com/projects/hanowl.com/7.webp',
      'https://cdn.choi138.com/projects/hanowl.com/8.webp',
      'https://cdn.choi138.com/projects/hanowl.com/9.webp',
      'https://cdn.choi138.com/projects/hanowl.com/10.webp',
      'https://cdn.choi138.com/projects/hanowl.com/11.webp',
      'https://cdn.choi138.com/projects/hanowl.com/12.webp',
      'https://cdn.choi138.com/projects/hanowl.com/13.webp',
      'https://cdn.choi138.com/projects/hanowl.com/14.webp',
      'https://cdn.choi138.com/projects/hanowl.com/15.webp',
    ],
    github: 'https://github.com/hanowwl/hanowl.com',
    link: 'https://recruit.hanum.us',
  },
  {
    title: '위밋 (풀스택)',
    date: '2023.12.28 ~ 2024.02.01',
    description: '맛집과 할 일 추천해주는 사이트 "위밋"',
    tag: [
      TYPESCRIPT,
      REACT_JS,
      EMOTION,
      'Zustand',
      'React-Kakao-Maps-Sdk',
      NESTJS,
      'Prsima',
      'OpenAI',
      'Naver Open API',
    ],
    doing: [
      '프론트엔드와 백엔드를 담당하였습니다',
      'Zustand를 사용하여 상태관리를 하였습니다.',
      'useDebounce 커스텀 훅을 만들어 실시간 검색 변환 기능을 구현하였습니다.',
      'react-kakao-maps-sdk를 사용하여 지도를 구현하였습니다.',
      '백엔드에서 온 응답을 이용하여 map으로 표시하는 기능을 구현하였습니다.',
      'OpenAIdml ChatGpt3.5를 사용하여 각 지역에 대한 추천 서비스를 구현했습니다',
      'Naver Open Api를 사용하여 검색 기능을 구현했습니다.',
    ],
    modalImg: 'https://cdn.choi138.com/projects/weMeet/modal.png',
    images: [
      'https://cdn.choi138.com/projects/weMeet/1.webp',
      'https://cdn.choi138.com/projects/weMeet/2.webp',
      'https://cdn.choi138.com/projects/weMeet/3.webp',
      'https://cdn.choi138.com/projects/weMeet/4.webp',
      'https://cdn.choi138.com/projects/weMeet/5.webp',
      'https://cdn.choi138.com/projects/weMeet/6.webp',
      'https://cdn.choi138.com/projects/weMeet/7.webp',
      'https://cdn.choi138.com/projects/weMeet/8.webp',
      'https://cdn.choi138.com/projects/weMeet/9.webp',
    ],
    github: 'https://github.com/we-meetting/weMeet-frontend',
  },
  {
    title: '@choi138/react-text',
    date: '2023.10.06 ~ 2023.11.02',
    description: 'React.js 텍스트 라이브러리',
    tag: [TYPESCRIPT, REACT_JS, EMOTION, PRETTIER, PNPM],
    doing: [
      <>
        Pnpm을 사용하여 <strong>라이브러리를</strong> 직접 배포하였습니다.
      </>,
      '매번 Text 컴포넌트를 만들다보니 불편함을 느껴서 만들게 되었습니다.',
      'Rem을 사용하여 반응형으로 구현하였습니다.',
      'Emotion을 사용하여 스타일링을 하였습니다.',
    ],
    modalImg: 'https://cdn.choi138.com/projects/reactText/modal.webp',
    images: [
      'https://cdn.choi138.com/projects/reactText/1.webp',
      'https://cdn.choi138.com/projects/reactText/2.webp',
      'https://cdn.choi138.com/projects/reactText/3.webp',
    ],
    github: 'https://github.com/choi138/react-text',
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
    modalImg: 'https://cdn.choi138.com/projects/hanum/modal.webp',
    images: [
      'https://cdn.choi138.com/projects/hanumBooth/1.webp',
      'https://cdn.choi138.com/projects/hanumBooth/2.webp',
      'https://cdn.choi138.com/projects/hanumBooth/3.webp',
    ],
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
      <>
        제6회 한세톤에서 <strong>2등</strong>을 수상했습니다.
      </>,
      '"우리, 함께" 프로젝트의 프론트 1인 개발을 담당했습니다.',
      'React-Leaflet 라이브러리를 사용하여 지도 기능을 구현했습니다.',
      '사용자의 위치를 지도에 표시하는 기능을 구현했습니다.',
      'PWA를 사용하여 웹을 앱처럼 사용할 수 있게 구현했습니다.',
    ],
    github: 'https://github.com/hanseithonkk/wetogether.react.front',
    modalImg: 'https://cdn.choi138.com/projects/weTogether/modal.webp',
    images: ['https://cdn.choi138.com/projects/weTogether/video.avif'],
  },
  {
    title: '한북',
    date: '2023.04.17 ~ 2023.06.26 (이후 유지보수)',
    description: '한세고의 동아리 책 관리 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'Framer-Motion', 'React-Lottie', 'Vite'],
    doing: [
      '한북 프로젝트의 프론트 1인 개발을 담당했습니다.',
      'React-Lottie를 사용하여 성공, 실패, 로딩 애니메이션을 구현했습니다.',
      '사용자의 위치를 가져와 학교 안에서만 반납할 수 있게 구현했습니다.',
      '처음으로 백엔드와 통신을 React Query를 사용하여 하였습니다.',
    ],
    github: 'https://github.com/hansei-book-management/hanbook-frontend',
    link: 'https://hanbook.hsoc.kr/',
    modalImg: 'https://cdn.choi138.com/projects/hanbook/1.webp',
    images: [
      'https://cdn.choi138.com/projects/hanbook/1.webp',
      'https://cdn.choi138.com/projects/hanbook/2.webp',
      'https://cdn.choi138.com/projects/hanbook/3.webp',
      'https://cdn.choi138.com/projects/hanbook/4.webp',
      'https://cdn.choi138.com/projects/hanbook/5.webp',
      'https://cdn.choi138.com/projects/hanbook/6.webp',
      'https://cdn.choi138.com/projects/hanbook/7.webp',
      'https://cdn.choi138.com/projects/hanbook/8.webp',
      'https://cdn.choi138.com/projects/hanbook/9.webp',
      'https://cdn.choi138.com/projects/hanbook/10.webp',
      'https://cdn.choi138.com/projects/hanbook/11.webp',
      'https://cdn.choi138.com/projects/hanbook/12.webp',
      'https://cdn.choi138.com/projects/hanbook/13.webp',
      'https://cdn.choi138.com/projects/hanbook/14.webp',
    ],
  },
  {
    title: '학생회 신입부원 모집 사이트',
    date: '2023.03.03 ~ 2023.03.20',
    description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', PRETTIER, 'Yarn'],
    doing: [
      '첫 협업으로 Emotion, ESLint 그리고 Prettier를 사용하는 계기가 되었습니다.',
      '선배님들의 코드 리뷰를 통해 코드를 깔끔하게 작성하는 방법을 배웠습니다.',
      '많은 리스트들을 사용하여 반복되는 코드를 줄였습니다.',
      '절대 경로를 설정하여 import를 편하게 할 수 있게 구현했습니다.',
    ],
    github: 'https://github.com/hanowwl/recruit.hanowl.com',
    modalImg: 'https://cdn.choi138.com/projects/recruit.hanowl.com/logo.webp',
    images: [
      'https://cdn.choi138.com/projects/recruit.hanowl.com/1.webp',
      'https://cdn.choi138.com/projects/recruit.hanowl.com/2.webp',
      'https://cdn.choi138.com/projects/recruit.hanowl.com/3.webp',
      'https://cdn.choi138.com/projects/recruit.hanowl.com/4.webp',
      'https://cdn.choi138.com/projects/recruit.hanowl.com/5.webp',
    ],
  },
  {
    title: '보안관제 동아리 모집 사이트 (풀스택)',
    date: '2023.02.11 ~ 2023.03.05',
    description: '2023년 보안관제 동아리 신입부원 모집과 소개 홈페이지',
    tag: [TYPESCRIPT, NEXT_JS, 'React-Hook-Form', 'Prisma', 'MySQL'],
    doing: [
      '프론트, 백엔드, 서버 배포까지 모두 1인 개발을 담당했습니다.',
      'Next.js를 사용하여 SSR을 사용했습니다.',
      'Prisma를 사용하여 데이터베이스 구축과 백엔드 개발을 담당했습니다.',
    ],
    github: 'https://github.com/hansei-hsoc/hsoc-homepage-2023',
    link: 'https://hsoc.kr',
    modalImg: 'https://cdn.choi138.com/projects/hsoc/modal.webp',
    images: [
      'https://cdn.choi138.com/projects/hsoc/1.webp',
      'https://cdn.choi138.com/projects/hsoc/2.webp',
      'https://cdn.choi138.com/projects/hsoc/3.webp',
      'https://cdn.choi138.com/projects/hsoc/4.webp',
      'https://cdn.choi138.com/projects/hsoc/5.webp',
      'https://cdn.choi138.com/projects/hsoc/6.webp',
      'https://cdn.choi138.com/projects/hsoc/7.webp',
      'https://cdn.choi138.com/projects/hsoc/8.webp',
      'https://cdn.choi138.com/projects/hsoc/9.webp',
    ],
  },
  {
    title: 'FMCC',
    date: '2022.12.14 ~ 2023.02.09',
    description: '영화 기본 정보와 예고편을 볼 수 있는 웹 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'Slick-Carousel', 'React-Query', 'TMDB API'],
    doing: [
      '처음으로 직접 사이트를 만들어보았습니다.',
      'React-Query를 사용하여 TMDB API에 있는 정보를 가져왔습니다.',
      'React-Slick을 사용하여 이미지 슬라이더를 구현했습니다.',
    ],
    github: 'https://github.com/MovieWebP/fmcc-frontend',
    modalImg: 'https://cdn.choi138.com/projects/fmcc/1.webp',
    images: [
      'https://cdn.choi138.com/projects/fmcc/1.webp',
      'https://cdn.choi138.com/projects/fmcc/2.webp',
      'https://cdn.choi138.com/projects/fmcc/3.webp',
      'https://cdn.choi138.com/projects/fmcc/4.webp',
      'https://cdn.choi138.com/projects/fmcc/5.webp',
    ],
  },
];
