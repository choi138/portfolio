import { AboutMeItems } from './aboutMe';

export type StudyItems = Omit<AboutMeItems, 'subTitle' | 'link'>;

export const STUDY_LIST: StudyItems[] = [
  {
    title: 'React Native',
    date: '2023. 09 ~',
    description: '한움(한세사이버보안고 도우미) 앱 개발을 위해 React Native를 공부하였습니다.',
    tag: ['React Native', 'Typescript', 'Yarn'],
  },
  {
    title: 'Next.js',
    date: '2023. 02 ~',
    description:
      'React.js를 사용하면서 SSR을 사용해보고 싶어서 Next.js를 공부하였습니다. 이를 사용해 보안관제 동아리 사이트를 개발하였습니다.',
    tag: ['Next.js', 'React.js', 'Typescript', 'Prisma'],
  },
  {
    title: 'NestJs',
    date: '2022. 12 ~',
    description: 'Node.js에서 구조화된 백엔드를 사용하고 싶어서 Nest.js를 공부하였습니다.',
    tag: ['NestJs', 'Node.js', 'Express.js', 'Typescript', 'TypeOrm'],
  },
  {
    title: 'Node.js',
    date: '2022. 11 ~',
    description:
      'React.js를 사용하면서 백엔드도 배워보고 싶다는 생각이 들어서 Node.js를 공부하였습니다.',
    tag: ['Node.js', 'Express.js', 'Typescript'],
  },
  {
    title: 'React.js + Typescript',
    date: '2022. 10 ~',
    description:
      'React.js를 사용하면서 type 에러가 많이 발생하여 이걸 보완하기 위해 Typescript를 공부하였습니다.',
    tag: ['Typescript', 'React.js', 'Npm'],
  },
  {
    title: 'React.js',
    date: '2022. 08 ~',
    description:
      '고등학교에 와서 React.js라는것을 알게되었고, React.js를 사용하여 웹 개발을 공부하였습니다.',
    tag: ['JavaScript', 'React.js', 'Npm'],
  },
  {
    title: 'Html, Css, Javascript',
    date: '2021. 11 ~',
    description:
      '중학교 3학년때 처음 개발에 관심이 생겨, 웹 개발을 위한 기본적인 지식을 공부했습니다.',
    tag: ['Html', 'Css', 'Javascript'],
  },
];
