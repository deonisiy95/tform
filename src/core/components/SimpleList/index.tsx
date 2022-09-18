import React, {FC} from 'react';
import style from './style.less';

interface IProps {
  options: string[];
}

export const SimpleList: FC<IProps> = ({options}) => {
  return (
    <div className={style.list}>
      {options.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};
