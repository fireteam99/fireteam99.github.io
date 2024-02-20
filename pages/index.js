import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
  Link,
  Stack,
  useMediaQuery,
  Spacer,
} from '@chakra-ui/react';
import Image from 'next/image';
import PageWrapper from '../components/PageWrapper';
import { heading, timeline, links } from '../data/home';
import useIsClient from '../hooks/useIsClient';

function ExperienceBlock({
  url,
  logo,
  organization,
  title,
  start,
  end,
  duration,
  location,
}) {
  const [isSmallerThan30em] = useMediaQuery('(max-width: 30em)');
  return (
    <HStack padding=".6em 0" spacing="1em">
      <Flex bg="light" borderRadius="10%">
        <a href={url || '#'} target="_blank" rel="noreferrer">
          <Box
            height={['4em', '3em']}
            width={['4em', '3em']}
            position="relative"
            borderRadius="10%"
            overflow="hidden"
          >
            {logo && (
              <Image src={logo} alt={logo} layout="fill" objectFit="contain" />
            )}
          </Box>
        </a>
      </Flex>
      <VStack alignItems="start" spacing=".1em">
        <Stack direction={['column', 'row']} spacing={['.1em', '.3em']}>
          <Heading fontSize="xl">{organization}</Heading>
          {!isSmallerThan30em && <Heading size="md">|</Heading>}
          <Text fontSize="md">{title}</Text>
        </Stack>
        <Stack
          direction={['column', 'row']}
          spacing={['.1em', '.3em']}
          alignItems={['initial', 'center']}
        >
          <Text fontSize={['xs', 'sm']}>
            {duration ? duration : `${start} - ${end || 'Present'}`}
          </Text>
          {!isSmallerThan30em && <Text size="xs">|</Text>}
          <Text fontSize={['xs', 'sm']}>{location}</Text>
        </Stack>
      </VStack>
    </HStack>
  );
}

export default function Home() {
  const [isSmallerThan30em] = useMediaQuery('(max-width: 30em)');
  const isClient = useIsClient();
  return (
    <PageWrapper>
      <VStack mt={['1em', '0em', '2em']} w="100%">
        <VStack
          mx={['1em', '0']}
          justifyContent={['center', 'start']}
          spacing="2em"
        >
          <VStack
            alignItems="start"
            maxW={['100%', '30em', '30em', '40em', '50em']}
            mx={['1em', '0']}
          >
            <Heading size="3xl">{heading.title}</Heading>
            <Text fontSize="mx">{heading.description}</Text>
          </VStack>
          <VStack alignItems={['center', 'start']} w="100%">
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
                    {isClient && !isSmallerThan30em && (
                      <>
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
                        <Spacer width="1em" />
                      </>
                    )}
                    <ExperienceBlock
                      url={url}
                      logo={logo}
                      organization={organization}
                      title={title}
                      start={start}
                      end={end}
                      location={location}
                      duration={duration}
                    />
                  </HStack>
                )
              )}
            </VStack>
          </VStack>
          <HStack
            justifyContent={['center', 'start']}
            w="100%"
            spacing=".5em"
            pb={['.5em', '0']}
          >
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
