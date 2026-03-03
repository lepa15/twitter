import { useEffect } from 'react';

export default function useEscape(handler: () =>  void, active: boolean) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!active) return;

      if (e.key === 'Escape') {
        handler();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, active]);
}
