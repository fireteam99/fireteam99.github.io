import { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import {
  Box,
  Button,
  IconButton,
  useDisclosure,
  SlideFade,
} from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Link from 'next/Link';

import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
  { href: '/resume', name: 'Resume' },
];

function NavLinks({ variant = 'large' }) {
  const isLarge = variant === 'large';
  return (
    <Flex as="nav" flexDirection="column">
      {navLinks.map(({ href, name }) => (
        <div
          key={name}
          css={css`
            cursor: pointer;
          `}
        >
          <motion.div
            whileHover={{
              x: isLarge ? 65 : 43,
              scaleY: 1.3,
              scaleX: 1.5,
              skew: -10,
              transition: { duration: 0.1, bounce: 1 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, bounce: 1 },
            }}
          >
            <Link href={href}>
              <Heading size={isLarge ? '4xl' : '3xl'}>{name}</Heading>
            </Link>
          </motion.div>
        </div>
      ))}
    </Flex>
  );
}

function ScreenBlur({ activated, ...rest }) {
  if (!activated) return null;
  return (
    <Box
      bg="rgba(0, 0, 0, 0.5)"
      backdropFilter="saturate(180%) blur(10px)"
      width="100%"
      height="100%"
      zIndex="10"
      top="0"
      left="0"
      position="fixed"
      {...rest}
    />
  );
}

function FloatingMenuButton() {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <Flex
      position="fixed"
      bottom={{ base: '2em', sm: '3em' }}
      left={{ base: '2em', sm: '3em' }}
      zIndex={100}
      flexDirection="column"
    >
      <Box {...disclosureProps} zIndex={200} mb="1em">
        <SlideFade in={isOpen} direction="bottom">
          <NavLinks variant="small" />
        </SlideFade>
      </Box>

      <IconButton
        variant="unstyled"
        {...buttonProps}
        width="3em"
        height="3em"
        zIndex="200"
        bg="rgba(131, 131, 131, 0.1)"
        backdropFilter="saturate(180%) blur(10px)"
        boxShadow="0px 0px 1em .1em rgba(66, 153, 225, 0.3)"
        color="rgba(223, 223, 223)"
        _hover={{ boxShadow: '0px 0px 1.5em .5em rgba(66, 153, 225, 0.5)' }}
      >
        {isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={7} />}
      </IconButton>
      <ScreenBlur activated={isOpen} {...buttonProps} />
    </Flex>
  );
}

export default function ResponsiveSidebar({ shouldCollapse }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && shouldCollapse ? (
    <FloatingMenuButton />
  ) : (
    <Box position="fixed" bottom="2em" left="2em">
      <NavLinks />
    </Box>
  );
}
