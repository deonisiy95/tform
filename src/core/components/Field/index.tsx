import React, {PropsWithChildren} from 'react';
import style from './style.less';
import cn from 'classnames';

interface Props {
  title: string | React.ReactNode;
  text?: string;
  className?: string;
}

export default function Field(props: PropsWithChildren<Props>) {
  return (
    <div className={cn(style.container, props.className)}>
      <div className={style.title}>{props.title}</div>
      {props.text && <div className={style.description}>{props.text}</div>}
      {props.children}
    </div>
  );
}
