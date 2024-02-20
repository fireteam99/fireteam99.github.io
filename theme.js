import { extendTheme } from '@chakra-ui/react';

const light = '#DFDFDF';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Rajdhani',
    body: 'Roboto',
  },
  colors: {
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
        color: 'blue.400',
        _hover: {
          color: 'blue.200',
        },
      },
    },
    Input: {
      parts: ['field'],
      baseStyle: {
        color: light,
        field: {
          color: light,
        },
      },
    },
    FormLabel: {
      baseStyle: {
        color: light,
      },
    },
    Textarea: {
      parts: ['field'],
      baseStyle: {
        color: light,
        field: {
          color: light,
        },
      },
    },
  },
});

export default theme;
