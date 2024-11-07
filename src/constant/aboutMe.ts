import { PNPM, REACT_JS, REACT_NATIVE, TYPESCRIPT } from './skillName';

export interface AboutMeItems {
  title: string;
  subTitle: string;
  date: string;
  description: string;
  link?: string;
  list?: {
    title: string;
    date: string;
  }[];
  tag: string[];
}

export const ABOUT_ME_LIST: AboutMeItems[] = [
  {
    title: '⭐️ 기술 스택',
    subTitle: 'Frontend 개발자',
    date: '2021. 08 ~',
    description: `${TYPESCRIPT}와 ${REACT_JS}, ${REACT_NATIVE}를 사용한 웹, 앱 개발을 하고 있습니다.`,
    tag: ['Web', REACT_JS, REACT_NATIVE, TYPESCRIPT, PNPM],
  },
  {
    title: '📁 레포지토리',
    subTitle: 'Github',
    date: '2021. 05. 18 ~',
    description: '프로젝트들을 진행하며 사용한 기술들을 정리하고 있습니다.',
    link: 'https://github.com/choi138',
    tag: ['Github', 'Git', 'Project', 'Repository'],
  },
  {
    title: '🪪 자격증',
    list: [
      {
        title: '정보처리운용기능사',
        date: '2024. 07. 23',
      },
      {
        title: 'AWS Certified Cloud Practitioner',
        date: '2024. 04. 18',
      },
      { title: '정보처리기능사', date: '2023. 09. 20' },
    ],
    subTitle: '',
    date: '',
    description: '전공과 관련된 자격증을 취득하며 컴퓨터에 대한 지식을 쌓고 있습니다.',
    tag: ['정보처리기능사', 'AWS Certified Cloud Practitioner', '정보처리운용기능사', '자격증'],
  },
];
