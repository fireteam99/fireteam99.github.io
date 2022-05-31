import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@fontsource/rajdhani/600.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import './styles.css';

const light = '#DFDFDF';

const theme = extendTheme({
  fonts: {
    heading: 'Rajdhani',
    body: 'Roboto',
  },
  colors: {
    useSystemColorMode: true,
    dark: '#1E2127',
    light,
  },
  components: {
    Text: {
      baseStyle: {
        color: light,
        fontWeight: '400',
      },
    },
    Heading: {
      baseStyle: {
        color: light,
        fontWeight: '600',
      },
      variants: {
        roboto: {
          fontWeight: '700',
          fontFamily: 'Roboto',
        },
      },
    },
    Link: {
      baseStyle: {
        color: "teal.400",
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
