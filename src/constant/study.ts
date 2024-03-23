import { AboutMeItems } from './aboutMe';
import { NESTJS, NEXT_JS, NODE_JS, REACT_JS, REACT_NATIVE, TYPESCRIPT } from './skillName';

export type StudyItems = Omit<AboutMeItems, 'subTitle' | 'link'>;

export const STUDY_LIST: StudyItems[] = [
  {
    title: REACT_NATIVE,
    date: '2023. 09 ~',
    description: `한세사이버보안고 도우미로서, '한움' 앱 개발을 위해 ${REACT_NATIVE}를 공부하였습니다. \n ${REACT_NATIVE}를 사용하여 바텀 시트, 대나무 숲, QR 인식, 실시간 투표, 달력 기능 등을 구현했습니다.`,
    tag: [REACT_NATIVE, TYPESCRIPT, 'Yarn'],
  },
  {
    title: NEXT_JS,
    date: '2023. 02 ~',
    description: `${REACT_JS}를 사용하며 SSR을 시도하기 위해 ${NEXT_JS}를 공부했습니다. \n ${NEXT_JS}를 이용하여 보안관제 동아리 소개 웹 사이트를 제작하고, ${NEXT_JS}, Next-auth, Prisma를 사용하여 백엔드와 데이터베이스를 구축했습니다.`,
    tag: [NEXT_JS, REACT_JS, TYPESCRIPT, 'Prisma'],
  },
  {
    title: NESTJS,
    date: '2022. 12 ~',
    description: `${NODE_JS}에서 구조화된 백엔드를 사용하고 싶어서 ${NESTJS}를 공부했습니다. \n NestJs, GraphQL, MySQL, JWT 인증을 이용하여 우버이츠 백엔드 클론 코딩을 수행했습니다.`,
    tag: [NESTJS, NODE_JS, 'Express.js', TYPESCRIPT, 'TypeOrm', 'GraphQL', 'JWT', 'MySQL'],
  },
  {
    title: NODE_JS,
    date: '2022. 11 ~',
    description: `${REACT_JS}를 사용하며 백엔드도 익히고 싶어져 ${NODE_JS}를 공부했습니다. \n ${NODE_JS}를 활용하여 웹 서버를 구축하는 등의 경험을 쌓았습니다.`,
    tag: [NODE_JS, 'Express.js', TYPESCRIPT],
  },
  {
    title: `${REACT_JS} + ${TYPESCRIPT}`,
    date: '2022. 10 ~',
    description: `${REACT_JS}를 사용하면서 발생한 타입 에러를 보완하기 위해 ${TYPESCRIPT}를 공부했습니다. \n ${REACT_JS}와 ${TYPESCRIPT}를 결합하여 웹 개발 프로젝트를 진행했습니다.`,
    tag: [TYPESCRIPT, REACT_JS, 'Npm'],
  },
  {
    title: REACT_JS,
    date: '2022. 08 ~',
    description: `고등학교에 들어와서 ${REACT_JS}를 접하게 되었고, 이를 활용하여 웹 개발을 공부했습니다.`,
    tag: ['JavaScript', REACT_JS, 'Npm'],
  },
  {
    title: 'HTML, CSS, JavaScript',
    date: '2021. 11 ~',
    description:
      '중학교 3학년때 처음 개발에 흥미를 갖게 되어 웹 개발을 위한 기본적인 지식을 공부했습니다.',
    tag: ['HTML', 'CSS', 'JavaScript'],
  },
];
