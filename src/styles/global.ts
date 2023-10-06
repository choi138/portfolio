import { css } from '@emotion/react';

import { reset } from './reset';
import { colors } from './colors';

export const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }

  html {
    font-size: 10px;
  }

  html,
  body,
  #app,
  #root,
  #__next {
    width: 100%;
    height: 100%;
    color: ${colors.black};
    background-color: ${colors.white};
  }

  #app,
  #root,
  #__next {
    font-size: 14px;
    font-weight: 400;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    letter-spacing: -0.03em;
  }

  html,
  body {
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
      font-size: 18px;
    }

    @media screen and (max-width: 2000px) and (min-width: 1500px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1500px) and (min-width: 1000px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1000px) and (min-width: 700px) {
      font-size: 14px;
    }

    @media screen and (max-width: 700px) and (min-width: 500px) {
      font-size: 12px;
    }

    @media screen and (max-width: 500px) and (min-width: 300px) {
      font-size: 14px;
    }
  }
`;
