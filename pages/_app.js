import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import '@fontsource/rajdhani/600.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import './styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
