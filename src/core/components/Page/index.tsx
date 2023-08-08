import React, {FC} from 'react';
import style from './style.less';
import {Header} from 'src/app/components/Header';
import cn from 'classnames';

interface IProps {
  title?: string;
}

export const Page: FC<IProps> = ({title, children}) => {
  return (
    <div className={style.page}>
      {title ? <Header title={title} /> : null}
      <div className={cn(style.content, 'scroll')}>{children}</div>
    </div>
  );
};
