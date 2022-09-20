import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  value: string;
}

export const TextControl: FC<IProps> = ({value}) => {
  return (
    <div className={cn(style.control, {[style.empty]: !value})}>{value || l10n('enter.text')}</div>
  );
};
