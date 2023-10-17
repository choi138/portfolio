import { atom } from 'recoil';

export interface ModalAtomProps {
  title?: string;
  date?: string;
  description?: string;
  tag?: string[];
  modalImg?: string;
  images?: string[];
  video?: string;
  link?: string;
  github?: string;
  appStore?: string;
  playStore?: string;
  doing?: string[];
  isOpen: boolean;
}

export const ModalAtom = atom<ModalAtomProps>({
  key: 'ModalAtom',
  default: {
    title: '',
    date: '',
    description: '',
    tag: [],
    modalImg: '',
    images: [],
    video: '',
    link: '',
    github: '',
    appStore: '',
    playStore: '',
    doing: [],
    isOpen: false,
  },
});
