import {useCallback, useState} from 'react';

export default function useProcessingButton<T>(
  func: () => Promise<T> | T
): [boolean, () => Promise<T>] {
  const [processing, setProcess] = useState(false);

  const handler = useCallback(() => {
    setProcess(true);
    return Promise.resolve(func()).finally(() => setProcess(false));
  }, [func]);

  return [processing, handler];
}
