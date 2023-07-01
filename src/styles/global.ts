import { createGlobalStyle } from 'styled-components';

import DoHyeon from '~/assets/fonts/DoHyeon-Regular.ttf';
import HANNAAir from '~/assets/fonts/HANNA-Air-Regular.ttf';
import HANNAEleven from '~/assets/fonts/HANNA-11yrs-Regular.ttf';
import JUA from '~/assets/fonts/Jua-Regular.ttf';

export const GlobalFontStyles = createGlobalStyle`
  @font-face {
    font-family: "JUA";
    src: url(${JUA}) format('truetype');1
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "DoHyeon";
    src: url(${DoHyeon}) format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "HANNA-Air";
    src: url(${HANNAAir}) format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "HANNA-11yrs";
    src: url(${HANNAEleven}) format('truetype');
    font-weight: 400;
    font-display: swap;
  }
`;

export const GlobalStyle = createGlobalStyle` 
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: "HANNA-Air";
  }

  ol, ul {
    list-style: none;
    list-style-type: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
