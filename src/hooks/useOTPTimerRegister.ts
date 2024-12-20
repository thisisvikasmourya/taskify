import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { setOtpTimer } from "@/store/authSlice";

// Define return type for the hook
interface UseOTPTimerReturn {
  seconds: number;
  resetTimer: (newTime?: number) => void;
  clearTimer: () => void;
  isTimerRunning: boolean;
}

export const useOTPTimerRegister = (): UseOTPTimerReturn => {
  const dispatch = useAppDispatch();
  const timerFromRedux: number = useAppSelector((state) => state.auth.timer);
  const [seconds, setSeconds] = useState<number>(timerFromRedux || 120); // Default timer if no Redux state
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(seconds > 0);

  useEffect(() => {
    // Check localStorage for OTP timer on mount
    const storedTimer = localStorage.getItem('otpTimer');
    if (storedTimer && !isNaN(Number(storedTimer))) {
      const parsedTimer = parseInt(storedTimer, 10);
      setSeconds(parsedTimer);
      dispatch(setOtpTimer(parsedTimer));
    } else {
      setSeconds(timerFromRedux); // Sync with Redux if no localStorage
    }
  }, [dispatch, timerFromRedux]);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds: number) => {
          if (prevSeconds <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            dispatch(setOtpTimer(0));
            localStorage.removeItem('otpTimer');
            return 0;
          } else {
            const newSeconds = prevSeconds - 1;
            dispatch(setOtpTimer(newSeconds));
            localStorage.setItem('otpTimer', newSeconds.toString());
            return newSeconds;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, dispatch]);

  const resetTimer = (newTime: number = 120): void => {
    setSeconds(newTime);
    setIsTimerRunning(true);
    dispatch(setOtpTimer(newTime));
    localStorage.setItem('otpTimer', newTime.toString());
  };

  const clearTimer = (): void => {
    setSeconds(0);
    setIsTimerRunning(false);
    dispatch(setOtpTimer(0));
    localStorage.removeItem('otpTimer');
  };

  return { seconds, resetTimer, clearTimer, isTimerRunning };
};
