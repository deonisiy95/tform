import React, {LegacyRef} from 'react';
import style from './style.less';
import cn from 'classnames';

export interface IProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  invalid?: boolean;
}

function Input(props: IProps, ref: LegacyRef<HTMLInputElement>) {
  const {invalid, ...inputProps} = props;

  return (
    <input
      ref={ref}
      className={cn(style.input, {
        [style.invalid]: Boolean(invalid)
      })}
      {...inputProps}
    />
  );
}

export default React.forwardRef(Input);
