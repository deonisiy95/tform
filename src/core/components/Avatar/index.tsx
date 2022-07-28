import React, {FC} from 'react';
import style from './style.less';
import {getColorById, getInitials} from 'src/core/utils/avatar';

interface IProps {
  id: number;
  name: string;
}

export const Avatar: FC<IProps> = ({name, id}) => {
  const initials = getInitials(name);
  const backgroundColor = getColorById(id);

  return (
    <div style={{backgroundColor}} className={style.avatar}>
      {initials}
    </div>
  );
};
