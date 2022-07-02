import React, {PropsWithChildren} from 'react';
import style from './style.less';
import Header from 'src/app/components/Header';

interface IProps {
  menu: React.ReactNode;
}

export default function App({children, menu}: PropsWithChildren<IProps>) {
  return (
    <div className={style.container}>
      {menu}
      <div className={style.main}>
        <Header />
        <div className={style.page}>{children}</div>
      </div>
    </div>
  );
}
