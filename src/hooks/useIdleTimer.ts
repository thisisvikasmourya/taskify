import { useEffect, useRef } from 'react';

interface UseIdleTimerOptions {
  onIdle: () => void;
  timeout?: number;
}

function useIdleTimer({ onIdle, timeout = 30 * 60 * 1000 }: UseIdleTimerOptions) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleActivity = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(onIdle, timeout);
    };

    // Listen for user activity events
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    // Set initial timer
    handleActivity();

    // Clean up event listeners and timer on unmount
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [onIdle, timeout]);
}

export default useIdleTimer;
