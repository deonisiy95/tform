import React, {PropsWithChildren} from 'react';
import style from './style.less';

interface IProps {
  menu: React.ReactNode;
}

export default function App({children, menu}: PropsWithChildren<IProps>) {
  return (
    <div className={style.container}>
      {menu}
      <div className={style.main}>
        {children}
      </div>
    </div>
  );
}
