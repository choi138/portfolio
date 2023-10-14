import {
  HanbookLogoPng,
  HanowwlLogoPng,
  HanumLogoPng,
  HsocLogoPng,
  WeTogetherLogoPng,
} from 'src/assets';

export interface PorjectItems {
  image: string;
  href: string;
}

export const PROJECT_LIST: PorjectItems[] = [
  {
    image: HsocLogoPng,
    href: 'https://github.com/hansei-hsoc',
  },
  {
    image: HanowwlLogoPng,
    href: 'https://github.com/hanowwl',
  },
  {
    image: HanbookLogoPng,
    href: 'https://github.com/hansei-book-management',
  },
  {
    image: WeTogetherLogoPng,
    href: 'https://github.com/hanseithonkk',
  },
  {
    image: HanumLogoPng,
    href: 'https://github.com/hansei-hanum',
  },
];
