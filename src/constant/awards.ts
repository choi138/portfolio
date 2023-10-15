import { StudyItems } from './study';

export interface AwardItems extends StudyItems {}

export const AWARD_LIST: AwardItems[] = [
  //   {
  //     title: '2023년 중학생 정보보안 콘테스트 운영',
  //     date: '2023. 11. 11',
  //     description:
  //       '한세사이버보안고등학교에서 주관하는 2023년 중학생 정보보안 콘테스트를 CTFd를 사용하여 운영 및 총괄을 맡았습니다.',
  //     tag: ['CTF', '한세사이버보안고', 'CTFd'],
  //   },
  {
    title: '2023년 교내 CTF 대회 운영',
    date: '2023. 09. 27',
    description:
      '2023년 한세사이어보안고등학교의 교내 CTF 대회 (HISCON)을 CTFd를 사용하여 운영 및 총괄을 맡았습니다.',
    tag: ['CTF', 'HISCON', '한세사이버보안고', 'CTFd'],
  },
  {
    title: '제6회 한세톤 2등 수상',
    date: '2023. 07. 20',
    description:
      '제6회 한세톤(한세고 + 해커톤)에서 우리, 함께라는 프로젝트 프론트를 1인 개발 하였고, 2등을 수상하였습니다.',
    tag: ['한세톤', '한세사이버보안고', '웹', 'React'],
  },
  {
    title: '2022년 중학생 정보보안 콘테스트 운영',
    date: '2022. 11. 10',
    description:
      '한세사이버보안고등학교에서 주관하는 2022년 중학생 정보보안 콘테스트를 보안관제 부원으로써 운영 하였습니다.',
    tag: ['CTF', '한세사이버보안고', 'CTFd'],
  },
  {
    title: '2022년 교내 CTF 대회 운영',
    date: '2022. 09. 27',
    description: '2022년 한세사이어보안고등학교의 교내 CTF 대회 (HISCON)를 운영 하였습니다.',
    tag: ['CTF', 'HISCON', '한세사이버보안고', 'CTFd'],
  },
  {
    title: '제5회 한세톤 2등 수상',
    date: '2022. 07. 20',
    description: '제5회 한세톤(한세고 + 해커톤)에서 기획 담당을 하였고, 2등을 수상하였습니다.',
    tag: ['한세톤', '한세사이버보안고', '기획'],
  },
];
