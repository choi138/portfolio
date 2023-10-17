import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { App } from './App';
import { globalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={[globalStyle]} />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
