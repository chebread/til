import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    box-sizing: border-box;
  }
  
  html, body, #root {
    color: #000;
    font-weight: 600;
    box-sizing: border-box;
    cursor: text; // none
  }
`;

export default GlobalStyles;
