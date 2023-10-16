import { StudyItems } from './study';

export interface ProjectItems {
  projectTitle: string;
  project: StudyItems[];
}

export const PROJECT_LIST: ProjectItems[] = [
  {
    projectTitle: '학생회 한울',
    project: [
      {
        title: '한움',
        date: '2023.09.02 ~ ',
        description: '한세고의 모든 정보를 알려주는 한세고 도우미 앱, 한움',
        tag: ['React Native', 'React', 'TypeScript', 'React-Query', 'Yarn'],
      },
      {
        title: '학생회 신입부원 모집 사이트',
        date: '2023.03.03 ~ 2023.03.20',
        description: '2023년 학생회 신입부원 모집을 위한 홈페이지',
        tag: ['React.js', 'TypeScript'],
      },
    ],
  },
];
