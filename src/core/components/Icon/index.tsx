import React from 'react';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  type: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon({type, className, onClick}: IProps) {
  return <div className={cn(style.icon, 'icon', style[type], className)} onClick={onClick} />;
}
