import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  controls: React.ReactNode;
}

export const OptionsComponent: FC<IProps> = ({controls, children}) => {
  return <div className={cn('scroll', style.container)}>
    <div className={style.options}>
      {children}
    </div>
    <div className={style.controls}>
      {controls}
    </div>
  </div>;
};
