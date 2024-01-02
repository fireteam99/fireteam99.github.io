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
import { heading, timeline, links } from '../data/home';

export default function Home() {
  return (
    <PageWrapper>
      <VStack mt="2em" w="100%">
        <VStack maxW="60em" spacing="2em">
          <VStack alignItems="start" mr="5em">
            <Heading size="3xl">{heading.title}</Heading>
            <Text fontSize="mx">{heading.description}</Text>
          </VStack>
          <VStack alignItems="start" w="100%">
            <VStack alignItems="start" spacing="0em">
              {timeline.map(
                (
                  {
                    organization,
                    title,
                    start,
                    end,
                    duration,
                    logo,
                    location,
                    url,
                  },
                  i
                ) => (
                  <HStack key={organization + title} spacing="0em">
                    <Box
                      width=".1em"
                      bg="light"
                      height={
                        i == 0 || i == timeline.length - 1 ? '50%' : '100%'
                      }
                      marginBottom={
                        i == timeline.length - 1 ? 'auto' : 'initial'
                      }
                      marginTop={i == 0 ? 'auto' : 'initial'}
                    />
                    <Divider width="1em" />
                    <HStack padding=".6em 0" spacing="1em">
                      <Flex bg="light" borderRadius="10%">
                        <a href={url || '#'} target="_blank" rel="noreferrer">
                          <Box
                            height="3em"
                            width="3em"
                            position="relative"
                            borderRadius="10%"
                            overflow="hidden"
                          >
                            {logo && (
                              <Image
                                src={logo}
                                alt={logo}
                                layout="fill"
                                objectFit="contain"
                              />
                            )}
                          </Box>
                        </a>
                      </Flex>
                      <VStack alignItems="start" spacing=".1em">
                        <HStack spacing=".2em">
                          <Heading size="md">{organization}</Heading>
                          <Heading size="md">|</Heading>
                          <Text size="xs">{title}</Text>
                        </HStack>
                        <HStack spacing=".3em">
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
