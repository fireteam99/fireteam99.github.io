import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@fontsource/rajdhani/600.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import './styles.css';

const theme = extendTheme({
  fonts: {
    heading: 'Rajdhani',
    body: 'Roboto',
  },
  colors: {
    useSystemColorMode: true,
    dark: '#1E2127',
    light: '#DFDFDF',
  },
  components: {
    Text: {
      baseStyle: {
        color: '#DFDFDF',
        fontWeight: '400',
      },
    },
    Heading: {
      baseStyle: {
        color: '#DFDFDF',
        fontWeight: '600',
      },
      variants: {
        roboto: {
          fontWeight: '700',
          fontFamily: 'Roboto'
        }
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
