import React, {PropsWithChildren} from 'react';
import style from './style.less';
import {AccountBlock} from 'src/account/controllers/AccountBlock';

interface IProps {
  menu: React.ReactNode;
}

export default function App({children, menu}: PropsWithChildren<IProps>) {
  return (
    <div className={style.container}>
      {menu}
      <div className={style.main}>
        <AccountBlock />
        {children}
      </div>
    </div>
  );
}
