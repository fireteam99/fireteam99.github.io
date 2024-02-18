import {
  Stack,
  Flex,
  HStack,
  Text,
  Heading,
  Link as ChakraLink,
  useMediaQuery,
} from '@chakra-ui/react';
import { primaryInput } from 'detect-it';

import Cursor from './Cursor';
import ResponsiveSidebar from './ResponsiveSidebar';
import { css } from '@emotion/react';
import { starryNightSvg } from './starryNight';

export const starryBg = css({
  width: '100%',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: starryNightSvg,
});

export default function PageWrapper(props) {
  const [shouldCollapse] = useMediaQuery('(max-width: 48em)');
  return (
    <Flex minH="100vh" w="100%" css={starryBg}>
      {primaryInput !== 'touch' && <Cursor />}
      <ResponsiveSidebar shouldCollapse={shouldCollapse} />
      <Flex flexFlow="column" w="100%">
        <HStack
          justifyContent="space-between"
          alignItems="start"
          m={['1em', '2em', '2.5em']}
          position={shouldCollapse ? 'initial' : 'sticky'}
          top={shouldCollapse ? 'initial' : '2.5em'}
          zIndex={100}
        >
          <Stack alignItems="flex-start" flexDirection="column">
            <Heading variant="roboto">Ray Sy</Heading>
            <Text>
              Software Engineer at{' '}
              <ChakraLink
                href="https://medallion.co"
                target="_blank"
                rel="noreferrer"
              >
                Medallion
              </ChakraLink>
            </Text>
          </Stack>
          <Stack alignItems="flex-end" flexDirection="column">
            {/* TODO: replace with updated logo */}
          </Stack>
        </HStack>
        <Flex
          overflowY="auto"
          height="100%"
          ml={['0', '5em', '20em', '22em']}
          {...props}
        />
      </Flex>
    </Flex>
  );
}
