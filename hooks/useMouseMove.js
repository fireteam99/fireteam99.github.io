import { useState, useEffect } from 'react';

export default function useMouseMove() {
  const [mouseEvent, setMouseEvent] = useState({ clientX: null, clientY: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setMouseEvent(event);
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  return mouseEvent;
}
