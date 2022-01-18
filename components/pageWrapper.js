import { useState, useEffect } from 'react';
import Link from 'next/Link';
import { Box, Flex, HStack, VStack, Text, Heading } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import useMousePosition from '../hooks/useMouseMove';

const navLinks = [
  { href: '/projects', name: 'Projects' },
  { href: '/about', name: 'About' },
  { href: '/contact', name: 'Contact' },
  { href: '/resume', name: 'Resume' },
];

function Cursor() {
  const { clientX, clientY } = useMousePosition();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  // console.log(velocityX.get(), velocityY.get());
  const scaleX = useTransform(velocityY, [0, 1000], [1, 0.6]);
  const scaleY = useTransform(velocityX, [0, 1000], [1, 0.6]);
  useEffect(() => {
    cursorX.set(clientX - 16);
    cursorY.set(clientY - 16);
    velocityX.set(cursorX.getVelocity());
    velocityY.set(cursorY.getVelocity());
  }, [clientX, clientY]);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scaleX,
        scaleY,
      }}
    />
  );
}

export default function PageWrapper(props) {
  return (
    <Flex minH="100vh" w="100%" bg="green">
      <Cursor />
      <Flex
        as="nav"
        position="fixed"
        bottom=".5em"
        left="1em"
        flexDirection="column"
      >
        {navLinks.map(({ href, name }) => (
          <diiv key={name}>
            <motion.div
              whileHover={{
                x: 65,
                scaleY: 1.3,
                scaleX: 1.5,
                skew: -10,
                transition: { duration: 0.1, bounce: 1 },
              }}
            >
              <Link href={href}>
                <Heading size="4xl">{name}</Heading>
              </Link>
            </motion.div>
          </diiv>
        ))}
      </Flex>
      <Flex flexFlow="column" bg="dark" w="100%">
        <HStack justifyContent="space-between" alignItems="start" m="3em">
          <Flex alignItems="flex-start" flexDirection="column">
            <Heading variant="roboto">Ray Sy</Heading>
            <Text>Software Engineer @ Amex</Text>
          </Flex>
          <HStack>
            <Text>raysydev@gmail.com</Text>
            <FaExternalLinkAlt color="var(--chakra-colors-light)" />
          </HStack>
        </HStack>
        <Flex
          justifyContent="flex-end"
          overflowY="auto"
          height="100%"
          {...props}
        />
      </Flex>
    </Flex>
  );
}
