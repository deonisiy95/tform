import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';
import {ITextControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  value: ITextControl['value'];
}

export const TextControl: FC<IProps> = ({value}) => {
  return (
    <div className={cn(style.control, {[style.empty]: !value})}>{value || l10n('enter.text')}</div>
  );
};
