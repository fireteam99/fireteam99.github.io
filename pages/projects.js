import {
  VStack,
  Heading,
  HStack,
  Img,
  Text,
  Divider,
  Link,
  Stack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import PageWrapper from '../components/PageWrapper';
import { heading, projects } from '../data/projects';

export default function Projects() {
  return (
    <PageWrapper>
      <VStack mt="2em" w="100%" ml={{ base: 0, '2xl': '5em' }}>
        <VStack
          w="95%"
          maxW="80em"
          spacing={{ base: '1em', xl: '6em' }}
          alignItems="flex-start"
        >
          <VStack alignItems="start">
            <Heading size="3xl">{heading.title}</Heading>
            {heading.description && (
              <Text fontSize="mx">{heading.description}</Text>
            )}
          </VStack>
          <VStack w="100%" align="start" spacing="5em">
            {projects.map(({ title, image, description, links }) => (
              <Stack
                direction={{ base: 'column-reverse', xl: 'row' }}
                key={title}
                w="100%"
                justifyContent="start"
                alignItems={{ base: 'center', xl: 'start' }}
                spacing="2em"
              >
                <VStack minW="33em">
                  <VStack
                    height={['13em', '10em', '17em', '20em']}
                    maxW={['20em', '20em', '25em', '30em']}
                  >
                    <Img
                      src={image}
                      alt={image}
                      height="100%"
                      objectFit="cover"
                      borderRadius="5%"
                    />
                  </VStack>
                </VStack>
                <VStack
                  maxW={{ base: '35em', xl: '30em' }}
                  alignItems="start"
                  p=".5em"
                  borderRadius=".5em"
                  backdropFilter="saturate(180%) blur(.5em)"
                >
                  <VStack alignItems="start" spacing="0em">
                    <Heading fontSize="4xl" color="gray.300">
                      {title}
                    </Heading>
                    <HStack>
                      {links.map(({ name, href }) => (
                        <NextLink href={href} key={name + href} passHref>
                          <Link fontSize="xl">{name}</Link>
                        </NextLink>
                      ))}
                    </HStack>
                  </VStack>
                  <Divider />
                  <Text>{description}</Text>
                </VStack>
              </Stack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
