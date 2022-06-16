import React from 'react';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  type: string;
  className?: string;
}

export default function Icon({type, className}: IProps) {
  return <div className={cn(style.icon, style[type], className)} />;
}
