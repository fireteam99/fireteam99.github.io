import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

import useMousePosition from '../../hooks/useMouseMove';
import useIsClient from '../../hooks/useIsClient';

export default function Cursor() {
  const isClient = useIsClient();

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

  const [cursorOnScreen, setCursorOnScreen] = useState(false);
  const clickScale = useSpring(1, springConfig);

  useEffect(() => {
    const handleMouseDown = () => {
      clickScale.set(0.8);
    };

    const handleMouseUp = () => {
      clickScale.set(1);
    };

    const handleMouseLeave = () => {
      setCursorOnScreen(false);
    };

    const handleMouseEnter = () => {
      setCursorOnScreen(true);
    };

    document.body.addEventListener('mousedown', handleMouseDown);
    document.body.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.removeEventListener('mousedown', handleMouseDown);
      document.body.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );
    };
  }, [clickScale, cursorX, cursorY]);

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
              scale: clickScale,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
        )}
      </AnimatePresence>
    )
  );
}
