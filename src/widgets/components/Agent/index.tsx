import React, {FC} from 'react';
import style from './style.less';
import Checkbox from 'UI/Checkbox';
import {Avatar} from 'UI/Avatar';

interface IProps {
  name;
}

export const Agent: FC<IProps> = ({name}) => {
  return (
    <Checkbox className={style.wrapper}>
      <div className={style.agent}>
        <Avatar id={123} name={name} />
        <div className={style.name}>{name}</div>
      </div>
    </Checkbox>
  );
};
