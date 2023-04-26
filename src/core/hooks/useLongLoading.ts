import {useState, useEffect, useRef} from 'react';

export default function useLongLoading(initialValue: boolean) {
  const [loading, setLoading] = useState(initialValue);
  const [isTimer, setIsTimer] = useState(initialValue);
  const timerRef = useRef<TimeoutId>();

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setIsTimer(true);
      timerRef.current = setTimeout(() => {
        setIsTimer(false);
        timerRef.current = null;
      }, 2000);
    }
  }, [loading]);

  return {isLoading: isTimer || loading, setLoading};
}
