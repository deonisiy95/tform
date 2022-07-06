import React from 'react';
import style from './style.less';

interface IProps {
  open: boolean;
}

export default function Settings({open}: IProps) {
  return <div className={style.popup}>Hello {open}</div>;
}
