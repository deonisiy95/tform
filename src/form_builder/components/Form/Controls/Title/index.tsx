import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';
import {ITitleControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  value: ITitleControl['value'];
}

export const TitleControl: FC<IProps> = ({value}) => {
  return (
    <div className={cn(style.control, {[style.empty]: !value})}>{value || l10n('enter.title')}</div>
  );
};
