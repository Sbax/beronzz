import chroma from 'chroma-js';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fontFamily, theme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    overflow: auto;
  }

  body {
    font-family: ${fontFamily.body}, serif;
    color: ${theme.text};
    background: ${theme.mainBg};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: underline;
    color: ${theme.accent};
    transition: 500ms ease-in-out opacity;

    &:hover {
      opacity: 0.5;
    }
  }

  b, strong {
    font-weight: bold;
  }

  i {
    font-style: italic;
  }

  button {
    font-size: 1rem;
    border: 0;
    font-family: inherit;

    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
