import {
  HanbookLogoWebp,
  HanowlModalJpeg,
  HanumLogoWebp,
  HsocLogoWebp,
  WeTogetherLogoWebp,
  WemeetLogo,
} from 'src/assets';

export interface ActivityItems {
  image: string;
  href: string;
}

export const ACTIVITY_LIST: ActivityItems[] = [
  {
    image: HsocLogoWebp,
    href: 'https://github.com/hansei-hsoc',
  },
  {
    image: HanowlModalJpeg,
    href: 'https://github.com/hanowwl',
  },
  {
    image: HanbookLogoWebp,
    href: 'https://github.com/hansei-book-management',
  },
  {
    image: WeTogetherLogoWebp,
    href: 'https://github.com/hanseithonkk',
  },
  {
    image: HanumLogoWebp,
    href: 'https://github.com/hansei-hanum',
  },
  {
    image: WemeetLogo,
    href: 'https://github.com/we-meetting',
  },
];
