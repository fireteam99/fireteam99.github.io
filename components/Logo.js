import { Flex, Heading } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Flex bg="#313649" p=".25em .5em" borderRadius="10%" {...props} justifyContent="center" alignItems="center">
      <Heading fontSize="30pt">RS</Heading>
    </Flex>
  );
}
