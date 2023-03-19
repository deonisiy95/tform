import React, {FC} from 'react';
import style from './style.less';

export const Header: FC<{title: string}> = ({title}): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
    </div>
  );
};
