import { REACT_JS, TYPESCRIPT } from './skillName';
import { StudyItems } from './study';

export interface AwardItems extends StudyItems {}

export const AWARD_LIST: AwardItems[] = [
  {
    title: '2023년 교내 CTF 대회 운영',
    date: '2023. 09. 27',
    description:
      '2023년에 한세사이버보안고등학교에서 개최한 교내 CTF 대회인 HISCON을 CTFd를 활용하여 운영하고 총괄했습니다.',
    tag: ['CTF', 'HISCON', '한세고', 'CTFd'],
  },
  {
    title: '제6회 한세톤 2등 수상',
    date: '2023. 07. 20',
    description:
      '제6회 한세톤에서 "우리, 함께라는" 프로젝트의 프론트엔드를 1인 개발하여 2등을 수상했습니다.',
    tag: ['한세톤', '한세고', 'Web', REACT_JS, TYPESCRIPT],
  },
  {
    title: '2022년 중학생 정보보안 콘테스트 운영',
    date: '2022. 11. 10',
    description:
      '2022년에는 한세사이버보안고등학교에서 주최한 중학생 정보보안 콘테스트를 보안관제 부원으로 참여하여 운영했습니다.',
    tag: ['CTF', '한세고', 'CTFd'],
  },
  {
    title: '2022년 교내 CTF 대회 운영',
    date: '2022. 09. 27',
    description: '2022년 HISCON 교내 CTF 대회를 성공적으로 운영했습니다.',
    tag: ['CTF', 'HISCON', '한세고', 'CTFd'],
  },
  {
    title: '제5회 한세톤 2등 수상',
    date: '2022. 07. 20',
    description: '제5회 한세톤에서 기획 담당으로 참여하여 2등을 수상했습니다.',
    tag: ['한세톤', '한세고', '기획'],
  },
];
