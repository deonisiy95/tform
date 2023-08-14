import React, {FC} from 'react';

import style from './Option.less';

interface IProps {
  onClick: () => void;
  label: string;
}

export const SelectOption: FC<IProps> = ({label, onClick}) => {
  return (
    <li onClick={onClick} className={style.option}>
      {label}
    </li>
  );
};
