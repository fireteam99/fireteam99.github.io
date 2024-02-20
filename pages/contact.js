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
  Text,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { socials } from '../data/contact';
import axios from 'axios';
import { useState } from 'react';

const FieldError = ({ error }) =>
  error ? <Text color="red.500">{error.message}</Text> : null;

export default function Contact() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await axios.post('/api/message', data);
      toast({ title: 'Message sent!', status: 'success', isClosable: true });
      reset();
    } catch (err) {
      console.error(err);
      toast({
        title: 'Oops, something went wrong',
        description: `Failed with an error of: ${err.code}, ${err.message}`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <VStack w="100%">
        <VStack
          w="88%"
          maxW="80em"
          alignItems="flex-start"
          spacing="2em"
          mt={['2em', '1em']}
        >
          <Heading size="3xl">Contact (coming soon)</Heading>
          <form
            css={css`
              width: 100%;
              max-width: 60em;
            `}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl isDisabled={true}>
              <VStack alignItems="start">
                <Box w="100%">
                  <FormLabel htmlFor="name">Name *</FormLabel>
                  <Input
                    id="name"
                    color="white"
                    isInvalid={errors.name}
                    {...register('name', { required: 'Name is required' })}
                  />
                  <FieldError error={errors.name} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    isInvalid={errors.email}
                    {...register('email', { required: 'Email is required' })}
                  />
                  <FieldError error={errors.email} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="subject">Subject *</FormLabel>
                  <Input
                    id="subject"
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    isInvalid={errors.subject}
                  />
                  <FieldError error={errors.subject} />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="message">Message *</FormLabel>
                  <Textarea
                    id="message"
                    height="7em"
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    isInvalid={errors.message}
                  />
                  <FieldError error={errors.message} />
                </Box>
                <Button
                  type="submit"
                  style={{ marginTop: '1em' }}
                  isLoading={isLoading}
                  disabled={true}
                >
                  Submit
                </Button>
              </VStack>
            </FormControl>
          </form>
          <HStack>
            {socials.map(({ name, url, icon }) => (
              <Tooltip label={name} fontSize="md" key={name + url}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.1, bounce: 1 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { duration: 0.1, bounce: 1 },
                  }}
                >
                  <a href={url}>
                    <Icon as={icon} color="light" boxSize="2em" />
                  </a>
                </motion.div>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
