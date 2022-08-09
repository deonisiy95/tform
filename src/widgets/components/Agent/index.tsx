import React, {FC} from 'react';
import style from './style.less';
import Checkbox from 'UI/Checkbox';
import {Avatar} from 'UI/Avatar';

interface IProps {
  name;
  onSelect: () => void;
}

export const Agent: FC<IProps> = ({name, onSelect}) => {
  return (
    <Checkbox className={style.wrapper} onChange={onSelect}>
      <div className={style.agent}>
        <Avatar id={123} name={name} />
        <div className={style.name}>{name}</div>
      </div>
    </Checkbox>
  );
};
