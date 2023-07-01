import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle, GlobalFontStyles } from './styles/global';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFontStyles />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
