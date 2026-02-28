import { useRef } from 'react';

export default function useSwipeDown(onSwipe: () => void) {
  const startY = useRef(0);

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
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
