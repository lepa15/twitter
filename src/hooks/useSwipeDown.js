import { useRef } from 'react';

export default function useSwipeDown(onSwipe) {
  const startY = useRef(0);

  const onTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY.current > 100) {
      onSwipe();
    }
  };

  return {
    onTouchStart,
    onTouchEnd,
  };
}
