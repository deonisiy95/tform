import React from 'react';
import style from './style.less';
import {Button} from 'shards-react';

interface IProps {
  onClick: () => void;
  value: string;
}

export default function SignInComponent({onClick, value}: IProps) {
  return (
    <div className={style.container}>
      <Button onClick={onClick}>Primary</Button>
      <span>{value}</span>
    </div>
  );
}
