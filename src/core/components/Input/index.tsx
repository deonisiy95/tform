import React, {LegacyRef, useCallback, KeyboardEvent} from 'react';
import style from './style.less';
import cn from 'classnames';

export interface IProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  invalid?: boolean;
  inline?: boolean;
  onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Input(props: IProps, ref: LegacyRef<HTMLInputElement>) {
  const {invalid, onEnter, inline, ...inputProps} = props;

  const onKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();

    if (onEnter && event.key === 'Enter') {
      onEnter(event);
    }
  }, [onEnter]);

  return (
    <input
      ref={ref}
      className={cn(style.input, {
        [style.invalid]: Boolean(invalid),
        [style.inline]: Boolean(inline)
      })}
      onKeyPress={onEnter ? onKeyPress : null}
      {...inputProps}
    />
  );
}

export default React.forwardRef(Input);
