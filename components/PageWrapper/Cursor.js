import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

import useMousePosition from '../../hooks/useMouseMove';

export default function Cursor() {
  const [isClient, setIsClient] = useState(false);

  const [cursorOnScreen, setCursorOnScreen] = useState(false);

  useEffect(() => {
    setIsClient(true);

    document.documentElement.addEventListener('mouseleave', () => {
      setCursorOnScreen(false);
    });
    document.documentElement.addEventListener('mouseenter', () => {
      setCursorOnScreen(true);
    });
  }, []);

  const { clientX, clientY } = useMousePosition();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);

  const scaleX = useTransform(velocityY, [0, 1000], [1, 0.6]);
  const scaleY = useTransform(velocityX, [0, 1000], [1, 0.6]);
  useEffect(() => {
    cursorX.set(clientX - 16);
    cursorY.set(clientY - 16);
    velocityX.set(cursorX.getVelocity());
    velocityY.set(cursorY.getVelocity());
  }, [clientX, clientY, cursorX, cursorY, velocityX, velocityY]);

  return (
    isClient && (
      <AnimatePresence>
        {cursorOnScreen && (
          <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
              scaleX,
              scaleY,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => console.log('clicked')}
            // zIndex={1000}
          />
        )}
      </AnimatePresence>
    )
  );
}
