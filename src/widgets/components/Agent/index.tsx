import React, {FC} from 'react';
import style from './style.less';
import Checkbox from 'UI/Checkbox';
import {Avatar} from 'UI/Avatar';

interface IProps {
  id: number;
  name;
  onSelect: () => void;
}

export const Agent: FC<IProps> = ({name, onSelect, id}) => {
  return (
    <Checkbox className={style.wrapper} onChange={onSelect}>
      <div className={style.agent}>
        <Avatar id={id} name={name} />
        <div className={style.name}>{name}</div>
      </div>
    </Checkbox>
  );
};
