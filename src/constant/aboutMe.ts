export interface AboutMeItems {
  title: string;
  subTitle: string;
  date: string;
  description: string;
  link?: string;
  tag: string[];
}

export const ABOUT_ME_LIST = [
  {
    title: '⭐️ 기술 스택',
    subTitle: 'Frontend 개발자',
    date: '2021. 08 ~',
    description: '타입스크립트와 React, React Native를 사용한 웹, 앱 개발을 하고 있습니다.',
    tag: ['Web', 'React', 'React Native', 'TypeScript', 'JavaScript', 'Pnpm'],
  },
  {
    title: '📚 레포지토리',
    subTitle: 'Github',
    date: '2021. 05. 18 ~',
    description: '프로젝트들을 진행하며 사용한 기술들을 정리하고 있습니다.',
    link: 'https://github.com/choi138',
    tag: ['Github', 'Git', 'Project', 'Repository'],
  },
];
