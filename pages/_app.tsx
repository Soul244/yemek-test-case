import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSpinner, faArrowLeft, faTriangleExclamation, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#be1f54',
    primaryHover: '#c43565'
  }
};

const GlobalStyles = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
`;

library.add(faPlus, faSpinner, faArrowLeft, faTriangleExclamation, faCheck, faTimes);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
