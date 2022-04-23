import React, {PropsWithChildren} from 'react';
import {Button as FormButton} from 'shards-react';
import style from './style.less';
import cn from 'classnames';

interface Props {
  onClick: Function;
  className?: string;
  isLoad?: boolean;
  disabled?: boolean;
}

export default function Button(props: PropsWithChildren<Props>) {
  return (
    <div className={cn(style.container, props.className)}>
      {props.isLoad && <div className={style.loader} />}
      <FormButton
        className={style.button}
        disabled={props.disabled || props.isLoad}
        onClick={props.onClick}
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
