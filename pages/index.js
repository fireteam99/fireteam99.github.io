import { Box, Flex, HStack, VStack, Text, Heading } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <Flex flexFlow="column" bg="dark" minH="100vh">
      <HStack justifyContent="space-between" alignItems="start" m="3em">
        <VStack alignItems="flex-start">
          <Heading>Ray Sy</Heading>
          <Text>Software Engineer @ Amex</Text>
        </VStack>
        <HStack>
          <Text>raysydev@gmail.com</Text>
          <FaExternalLinkAlt color="var(--chakra-colors-light)" />
        </HStack>
      </HStack>
      <HStack>
        <VStack as="nav" position="absolute" bottom="0">
          <Heading>Projects</Heading>
          <Heading>Contact</Heading>
          <Heading>Contact</Heading>
          <Heading>Resume</Heading>
        </VStack>
        <Box bg="red">
          Placeholder
        </Box>
      </HStack>
    </Flex>
  );
}
