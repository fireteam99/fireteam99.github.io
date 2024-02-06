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

export default function PageWrapper(props) {
  const [shouldCollapse] = useMediaQuery('(max-width: 48em)');
  return (
    <Flex minH="100vh" w="100%">
      {primaryInput !== 'touch' && <Cursor />}
      <ResponsiveSidebar shouldCollapse={shouldCollapse} />
      <Flex flexFlow="column" bg="dark" w="100%">
        <HStack
          justifyContent="space-between"
          alignItems="start"
          m={['2em', '3em']}
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
            {/* TIDIL replace with updated logo */}
          </Stack>
        </HStack>
        <Flex
          overflowY="auto"
          height="100%"
          marginLeft={['0', '5em', '22em']}
          {...props}
        />
      </Flex>
    </Flex>
  );
}
