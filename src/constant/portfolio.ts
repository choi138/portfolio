import * as I from 'src/assets';

export interface Project {
  name: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  githubUrl: string;
  description: string;
  date: string;
  techStack: string[];
  did: string[];
  images: string[];
}

export interface PortfolioItems {
  title: string;
  subTitle: string;
  projects: Project[];
}

export const PORTFOLIO_LIST: PortfolioItems[] = [
  {
    title: '학생회 한울',
    subTitle: `기능부원, 기능부장 \n 2023.03 ~ `,
    projects: [
      {
        name: '한세 도우미 앱, 한움',
        description: `한세사이버보안고등학교 도우미 앱`,
        appStoreUrl: `https://apps.apple.com/us/app/%ED%95%9C%EC%9B%80/id6463776026,`,
        playStoreUrl: `https://play.google.com/store/apps/details?id=com.hanowl.hanum`,
        githubUrl: `https://github.com/hansei-hanum/hanum-frontend`,
        date: '2023.09.12 ~ ',
        techStack: [
          'React Native',
          'TypeScript',
          'Emotion-Native',
          'Emotion-React',
          'React-Native-Webview',
          'React-Native-Qrcode-Scanner',
        ],
        did: [
          'React Native를 이용한 앱 개발을 하였습니다.',
          '2일 내에 학교 축제 부분(한세어울림마당)을 만들어야하는 촉박한 일정속에서 개발하여 성공적으로 학교 축제를 마쳤습니다.',
          '앱 내에서 학교 부스의 QR코드를 스캔하여 결제 할 수 있도록 개발하였습니다.',
        ],
        images: [
          I.Hanum1Png,
          I.Hanum2Png,
          I.Hanum3Png,
          I.Hanum4Png,
          I.Hanum5Png,
          I.Hanum6Png,
          I.Hanum7Png,
          I.Hanum8Png,
          I.Hanum9Png,
          I.Hanum10Png,
          I.Hanum11Png,
          I.Hanum12Png,
          I.Hanum13Png,
          I.Hanum14Png,
        ],
      },
    ],
  },
];
