import React, {FC} from 'react';
import style from './style.less';

export const Header: FC<{title: string}> = ({title, children}): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      {children}
    </div>
  );
};
