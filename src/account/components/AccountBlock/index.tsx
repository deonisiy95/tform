import React, {FC} from 'react';
import style from './style.less';

interface IProps {
  email: string;
  name: string;
}

export const AccountBlockComponent: FC<IProps> = ({email, name}) => {
  return (
    <div className={style.block}>
      <div className={style.name}>{name ?? email}</div>
      <div className={style.avatar} />
    </div>
  );
};
