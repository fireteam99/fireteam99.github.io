import {
  VStack,
  Heading,
  HStack,
  Box,
  Img,
  Text,
  Divider,
  Link,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import NextLink from 'next/Link';
import PageWrapper from '../components/PageWrapper';
import { heading, projects } from '../data/projects';

export default function Projects() {
  return (
    <PageWrapper>
      <VStack mt="2em" w="100%" ml="5em">
        <VStack w="95%" maxW="80em" spacing="6em" alignItems="flex-start">
          <VStack alignItems="start">
            <Heading size="3xl">{heading.title}</Heading>
            {heading.description && (
              <Text fontSize="mx">{heading.description}</Text>
            )}
          </VStack>
          <VStack w="100%" align="start" spacing="5em">
            {projects.map(({ title, image, description, links }) => (
              <HStack
                key={title}
                w="100%"
                justifyContent="start"
                alignItems="start"
                spacing="2em"
              >
                <VStack minW="33em">
                  <VStack height="20em" maxW="30em">
                    <Img
                      src={image}
                      alt={image}
                      height="100%"
                      objectFit="cover"
                      borderRadius="5%"
                    />
                  </VStack>
                </VStack>
                <VStack maxW="30em" alignItems="start">
                  <VStack alignItems="start" spacing="0em">
                    <Heading fontSize="4xl" color="gray.300">{title}</Heading>
                    <HStack>
                      {links.map(({ name, href }) => (
                        <NextLink href={href} key={name + href} passHref>
                          <Link fontSize="xl">
                            {name}
                          </Link>
                        </NextLink>
                      ))}
                    </HStack>
                  </VStack>
                  <Divider />
                  <Text>{description}</Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
