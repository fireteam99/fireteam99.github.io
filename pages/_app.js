import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    useSystemColorMode: true,
    dark: '#1E2127',
    light: '#DFDFDF'
  },
  components: {
    Text: {
      baseStyle: {
        color: '#DFDFDF'
      }
    },
    Heading: {
      baseStyle: {
        color: '#DFDFDF'
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
