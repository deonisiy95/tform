import React, {PropsWithChildren} from 'react';
import {Button as FormButton} from 'shards-react';
import style from './style.less';
import cn from 'classnames';

interface Props {
  onClick: Function;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'light';
  className?: string;
  isLoad?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}

export default function Button(props: PropsWithChildren<Props>) {
  return (
    <div className={cn(style.container, props.className)}>
      {props.isLoad && <div className={style.loader} />}
      <FormButton
        className={style.button}
        disabled={props.disabled || props.isLoad}
        onClick={props.onClick}
        theme={props.color}
        size={props.size}
        pill={Boolean(props.rounded)}
      >
        <div
          className={cn(style.text, {
            [style.hidden]: props.isLoad
          })}
        >
          {props.children}
        </div>
      </FormButton>
    </div>
  );
}
