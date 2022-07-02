import React from 'react';
import style from './style.less';
import Icon from 'UI/Icon';
import cn from 'classnames';

interface IProps {
  icon: string;
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function MenuItem({icon, onClick, title, isActive}: IProps) {
  return (
    <div className={cn(style.item, {
      [style.active]: isActive
    })} onClick={onClick}>
      <Icon type={icon} className={style.icon} />
      <span>{title}</span>
    </div>
  );
}
