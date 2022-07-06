import React, {PropsWithChildren} from 'react';
import style from './style.less';
import cn from 'classnames';

interface Props {
  onClick: Function;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'light' | 'azure';
  className?: string;
  isLoad?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}

export default function Button(props: PropsWithChildren<Props>) {
  return (
    <div className={cn(style.container, props.className)}>
      {props.isLoad && <div className={style.loader} />}
      <button
        className={cn(
          style.button,
          style[`button-${props.color ?? 'primary'}`],
          style[`button-${props.size}`],
          {
            [style.rounded]: props.rounded
          }
        )}
        disabled={props.disabled || props.isLoad}
        onClick={() => props.onClick()}
      >
        <div
          className={cn(style.text, {
            [style.hidden]: props.isLoad
          })}
        >
          {props.children}
        </div>
      </button>
    </div>
  );
}
