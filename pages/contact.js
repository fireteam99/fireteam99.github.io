import PageWrapper from '../components/PageWrapper';
import { css } from '@emotion/react';
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
  Button,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { socials } from '../data/contact';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();
  console.log(errors.message);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <PageWrapper>
      <VStack w="100%">
        <VStack w="95%" maxW="80em" alignItems="flex-start" spacing="2em">
          <Heading size="3xl">Contact</Heading>
          <form
            css={css`
              width: 100%;
              max-width: 60em;
            `}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl>
             {Object.keys(errors).length > 0 && <Alert status="error">
                <AlertIcon />
                <Box>
                <AlertTitle>
                  Error
                </AlertTitle>
                <AlertDescription>
                  <UnorderedList>
                    {Object.keys(errors).map((key) => (
                      <ListItem key={key}>{errors[key].message}</ListItem>
                    ))}
                  </UnorderedList>
                </AlertDescription>

                </Box>
              </Alert>}
              <VStack alignItems="start">
                <Box w="100%">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    color="white"
                    {...register('name', { required: 'Name is required' })}
                  />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                  />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <Input
                    id="subject"
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                  />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    id="message"
                    height="7em"
                    {...register('message', {
                      required: 'Message is required',
                    })}
                  />
                </Box>
                <Button type="submit" style={{ marginTop: '1em' }}>
                  Submit
                </Button>
              </VStack>
            </FormControl>
          </form>
          <HStack>
            {socials.map(({ name, url, icon }) => (
              <Tooltip label={name} fontSize="md" key={name + url}>
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
