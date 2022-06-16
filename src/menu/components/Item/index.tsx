import React from 'react';
import style from './style.less';
import Icon from 'UI/Icon';

interface IProps {
  icon: string;
  title: string;
  onClick: () => void;
}

export default function MenuItem({icon, onClick, title}: IProps) {
  return (
    <div className={style.item} onClick={onClick}>
      <Icon type={icon} className={style.icon} />
      <span>{title}</span>
    </div>
  );
}
