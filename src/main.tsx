import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Global } from '@emotion/react';

import { App } from './App';
import { globalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={[globalStyle]} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
