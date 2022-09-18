import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';

export const OptionsComponent: FC = ({children}) => {
  return <div className={cn('scroll', style.container)}>{children}</div>;
};
