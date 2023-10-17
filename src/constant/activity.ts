import {
  HanbookLogoWebp,
  HanowlLogoWebp,
  HanumLogoPng,
  HsocLogoPng,
  WeTogetherLogoWebp,
} from 'src/assets';

export interface ActivityItems {
  image: string;
  href: string;
}

export const ACTIVITY_LIST: ActivityItems[] = [
  {
    image: HsocLogoPng,
    href: 'https://github.com/hansei-hsoc',
  },
  {
    image: HanowlLogoWebp,
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
    image: HanumLogoPng,
    href: 'https://github.com/hansei-hanum',
  },
];
