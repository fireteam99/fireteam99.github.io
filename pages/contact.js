import PageWrapper from '../components/PageWrapper';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Box,
  HStack,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import { socials } from '../data/contact';

export default function Contact() {
  return (
    <PageWrapper>
      <VStack w="100%">
        <VStack w="95%" maxW="80em" alignItems="flex-start" spacing="2em">
          <Heading size="3xl">
            Contact
          </Heading>
          <FormControl w="100%" maxW="60em">
            <VStack alignItems="start">
              <Box w="100%">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" color="white" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input id="subject" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea id="message" height="7em" />
              </Box>
            </VStack>
          </FormControl>
          <HStack>
            {socials.map(({ name, url, icon }) => (
              <Tooltip label={name} fontSize='md' key={name + url}>
              <a href={url}>
                <Icon as={icon} color="light" boxSize="2em" />
              </a>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
