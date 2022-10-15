import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  isActive: boolean;
  onClick: () => void;
}

export const FormItem: FC<IProps> = ({isActive, onClick, children}) => {
  return (
    <div className={cn(style.container, {[style.active]: isActive})} onClick={onClick}>
      <div className={style.content}>{children}</div>
    </div>
  );
};
