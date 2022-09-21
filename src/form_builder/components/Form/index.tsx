import React, {FC} from 'react';
import style from './style.less';

export const Form: FC = ({children}) => {
  return (
    <div className={style.form}>
      {children}
    </div>
  );
};
