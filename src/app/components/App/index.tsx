import React, {PropsWithChildren} from 'react';
import style from './style.less';

export default function App({children}: PropsWithChildren<{}>) {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
}
