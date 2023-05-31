import React, {FC} from 'react';
import cn from 'classnames';
import style from './style.less';

interface IProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
}

export const PaginationPage: FC<IProps> = ({page, isActive, onClick}) => {
  return (
    <li key={page} className={cn({[style.active]: isActive})} onClick={onClick}>
      {page}
    </li>
  );
};
