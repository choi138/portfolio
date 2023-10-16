import { NEXT_JS, PNPM, REACT_JS, REACT_NATIVE, RECOIL, TYPESCRIPT } from './skillName';
import { StudyItems } from './study';

export interface ProjectItems extends StudyItems {}

export const PROJECT_LIST: ProjectItems[] = [
  {
    title: '한움',
    date: '2023.09.02 ~ ',
    description: '한세고의 모든 정보를 알려주는 한세고 도우미 앱, 한움',
    tag: [TYPESCRIPT, REACT_NATIVE, REACT_JS, 'React-Native-Qrcode-Scanner', 'Yarn'],
  },
  {
    title: '한움 축제 부스 대쉬보드',
    date: '2023.09.07 ~ 2023.09.21',
    description: '2023년 한세고 축제 부스 대쉬보드',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', RECOIL, PNPM],
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
  },
  {
    title: '한북',
    date: '2023.04.17 ~ 2023.06.26 (이후 유지보수)',
    description: '한세고의 동아리 책 관리 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'Framer-Motion', 'React-Lottie', 'Vite'],
  },
  {
    title: '학생회 신입부원 모집 사이트',
    date: '2023.03.03 ~ 2023.03.20',
    description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
    tag: [TYPESCRIPT, REACT_JS, 'Emotion', 'Yarn'],
  },
  {
    title: '보안관제 동아리 모집 사이트',
    date: '2023.02.11 ~ 2023.03.05 (이후 유지보수)',
    description: '2023년 보안관제 동아리 모집을 위한 홈페이지',
    tag: [TYPESCRIPT, NEXT_JS, 'React-Hook-Form', 'Prisma', 'MySQL'],
  },
  {
    title: 'FMCC',
    date: '2023.02.11 ~ 2023.03.05 (이후 유지보수)',
    description: '영화 기본 정보와 예고편을 볼 수 있는 사이트',
    tag: [TYPESCRIPT, REACT_JS, 'React-Query', RECOIL],
  },
];
