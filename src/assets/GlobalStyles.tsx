/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      /* Color and font variables */
      :root {
        --winter: rgb(212, 235, 248);
        --blue: rgb(31, 80, 154);
        --navy: rgb(10, 57, 129);
        --navy-transparent: rgb(10, 57, 129, 0.95);
        --orange: rgb(227, 142, 73);
      }

      /* CSS Reset */
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }
      body {
        margin: 0;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      ul,
      ol {
        list-style: none;
      }
    `}
  />
);

export default GlobalStyles;
