import React from 'react';

export interface IntroduceItems {
  title: string;
  value: string;
  link?: string;
  content?: React.ReactNode;
}

export const INTRODUCE_LIST: IntroduceItems[] = [
  {
    title: '이름',
    value: '최근원',
  },
  {
    title: '이메일',
    value: 'kidjustinchoi@gmail.com',
    link: 'mailto:kidjustinchoi@gmail.com',
  },
  {
    title: '나이',
    value: '2006.05.24 (18세) 🇰🇷',
  },
  {
    title: '학력',
    value: '한세사이버보안고등학교 (재학중)',
    link: 'https://hansei.sen.hs.kr/',
  },
];
