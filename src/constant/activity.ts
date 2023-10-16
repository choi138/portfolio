import {
  HanbookLogoPng,
  HanowwlLogoPng,
  HanumLogoPng,
  HsocLogoPng,
  WeTogetherLogoPng,
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
