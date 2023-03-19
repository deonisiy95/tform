import React, {FC} from 'react';
import style from './style.less';
import {Header} from 'src/app/components/Header';

interface IProps {
  title?: string;
}

export const Page: FC<IProps> = ({title, children}) => {
  return (
    <div className={style.page}>
      {title ? <Header title={title} /> : null}
      <div className={style.content}>{children}</div>
    </div>
  );
};
