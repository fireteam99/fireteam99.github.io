import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
  Link,
  Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import PageWrapper from '../components/PageWrapper';
import { intro, timeline, links } from '../data/home';

export default function Home() {
  return (
    <PageWrapper>
      <VStack mt="2em" w="100%">
        <VStack maxW="60em" spacing="2em">
          <VStack alignItems="start" mr="5em">
            <Heading size="3xl">{intro.title}</Heading>
            <Text fontSize="mx">{intro.description}</Text>
          </VStack>
          <VStack alignItems="start" w="100%">
            <VStack alignItems="start" spacing="0em">
              {timeline.map(
                (
                  { organization, title, start, end, duration, logo, location },
                  i
                ) => (
                  <HStack key={organization + title} spacing="0em">
                    <Box
                      width=".1em"
                      bg="light"
                      height={
                        i == 0 || i == timeline.length - 1 ? '50%' : '100%'
                      }
                      marginBottom={i == timeline.length - 1 ? "auto" :"initial"}
                      marginTop={i == 0 ? "auto" :"initial"}
                    />
                    <Divider width="1em" />
                    <HStack padding=".6em 0">
                      <Flex padding=".4em" bg="gray.100" borderRadius="10%">
                        <Box height="3em" width="3em" position="relative">
                          {logo && (
                            <Image
                              src={logo}
                              alt={logo}
                              layout="fill"
                              objectFit="contain"
                            />
                          )}
                        </Box>
                      </Flex>
                      <VStack alignItems="start" spacing=".1em">
                        <HStack spacing=".3em">
                          <Heading size="md">{organization}</Heading>
                          <Heading size="md">|</Heading>
                          <Text size="xs">{title}</Text>
                        </HStack>
                        <HStack>
                          <Text size="xs">
                            {duration
                              ? duration
                              : `${start} - ${end || 'Present'}`}
                          </Text>
                          <Text size="xs">|</Text>
                          <Text size="xs">{location}</Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  </HStack>
                )
              )}
            </VStack>
          </VStack>
          <HStack justifyContent="start" w="100%" spacing=".5em">
            {links.map(({ name, url }) => (
              <Link
                isExternal={true}
                fontSize="3xl"
                key={name + url}
                href={url}
              >
                {name}
              </Link>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
