import {useCallback, useEffect} from 'react';

export function useDropdownOutClick(
  isOpen: boolean,
  outClickCallback: (event: MouseEvent) => void
) {
  const onOutClick = useCallback(
    (event: MouseEvent) => {
      outClickCallback?.(event);
    },
    [outClickCallback]
  );

  useEffect(() => {
    return () => document.removeEventListener('click', onOutClick);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    isOpen
      ? document.addEventListener('click', onOutClick)
      : document.removeEventListener('click', onOutClick);
    // eslint-disable-next-line
  }, [isOpen]);
}
