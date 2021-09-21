import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

export default function useDispatcher<T extends (...args: any[]) => void>(f: T) {
  const dispatch = useDispatch();
  return useCallback((...args: any) => dispatch(f?.call(this, ...args)), [f]) as typeof f;
}
