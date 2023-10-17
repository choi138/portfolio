import { AboutMeItems } from './aboutMe';
import { NESTJS, NEXT_JS, NODE_JS, REACT_JS, REACT_NATIVE, TYPESCRIPT } from './skillName';

export type StudyItems = Omit<AboutMeItems, 'subTitle' | 'link'>;

export const STUDY_LIST: StudyItems[] = [
  {
    title: REACT_NATIVE,
    date: '2023. 09 ~',
    description: `한움(한세사이버보안고 도우미) 앱 개발을 위해 ${REACT_NATIVE}를 공부하였습니다.`,
    tag: [REACT_NATIVE, REACT_JS, TYPESCRIPT, 'Yarn'],
  },
  {
    title: NEXT_JS,
    date: '2023. 02 ~',
    description: `${REACT_JS}를 사용하면서 SSR을 사용해보고 싶어서 ${NEXT_JS}를 공부하였습니다. 이를 사용해 보안관제 동아리 사이트를 개발하였습니다.`,
    tag: [NEXT_JS, REACT_JS, TYPESCRIPT, 'Prisma'],
  },
  {
    title: NESTJS,
    date: '2022. 12 ~',
    description: `${NODE_JS}에서 구조화된 백엔드를 사용하고 싶어서 ${NESTJS}를 공부하였습니다. NestJs, GraphQL, MySQL, JWT 인증을 사용하여 우버이츠 백엔드 클론 코딩을 하였습니다. `,
    tag: [NESTJS, NODE_JS, 'Express.js', TYPESCRIPT, 'TypeOrm', 'GraphQL', 'JWT', 'MySQL'],
  },
  {
    title: NODE_JS,
    date: '2022. 11 ~',
    description: `${REACT_JS}를 사용하면서 백엔드도 배워보고 싶다는 생각이 들어서 ${NODE_JS}를 공부하였습니다.`,
    tag: [NODE_JS, 'Express.js', TYPESCRIPT],
  },
  {
    title: `${REACT_JS} + ${TYPESCRIPT}`,
    date: '2022. 10 ~',
    description: `${REACT_JS}를 사용하면서 type 에러가 많이 발생하여 이걸 보완하기 위해 ${TYPESCRIPT}를 공부하였습니다.`,
    tag: [TYPESCRIPT, REACT_JS, 'Npm'],
  },
  {
    title: REACT_JS,
    date: '2022. 08 ~',
    description: `고등학교에 와서 ${REACT_JS}를 알게되었고, ${REACT_JS}를 사용하여 웹 개발을 공부하였습니다.`,
    tag: ['JavaScript', REACT_JS, 'Npm'],
  },
  {
    title: 'Html, Css, Javascript',
    date: '2021. 11 ~',
    description:
      '중학교 3학년때 처음 개발에 관심이 생겨, 웹 개발을 위한 기본적인 지식을 공부했습니다.',
    tag: ['Html', 'Css', 'Javascript'],
  },
];
