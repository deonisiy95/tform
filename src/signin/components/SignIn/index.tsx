import React from 'react';
import style from './style.less';
import {Button} from 'shards-react';

export default function SignInComponent() {
  return (
    <div className={style.container}>
      <Button>Primary</Button>;
    </div>
  );
}
