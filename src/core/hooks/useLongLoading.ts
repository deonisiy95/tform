import {useState, useEffect, useRef} from 'react';

export default function useLongLoading(initialValue: boolean = false, delay = 1000) {
  const [loading, setLoading] = useState(initialValue);
  const [isTimer, setIsTimer] = useState(false);
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
      }, delay);
    }
  }, [loading]);

  return {isLoading: isTimer || loading, setLoading};
}
