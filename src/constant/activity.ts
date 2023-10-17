import {
  HanbookLogoPng,
  HanowlLogoSvg,
  HanumLogoPng,
  HsocLogoPng,
  WeTogetherLogoSvg,
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
    image: HanowlLogoSvg,
    href: 'https://github.com/hanowwl',
  },
  {
    image: HanbookLogoPng,
    href: 'https://github.com/hansei-book-management',
  },
  {
    image: WeTogetherLogoSvg,
    href: 'https://github.com/hanseithonkk',
  },
  {
    image: HanumLogoPng,
    href: 'https://github.com/hansei-hanum',
  },
];
