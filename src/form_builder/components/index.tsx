import React, {FC} from 'react';
import style from './style.less';
import {MenuItem} from 'src/form_builder/components/Menu/Item';
import {TTypeControl} from 'src/form_builder/@types/formBuilder';
import cn from 'classnames';

interface IProps {
  items: TTypeControl[];
  form: React.ReactNode;
  options: React.ReactNode;
  onAddControl: (type: TTypeControl) => void;
}

export const FormBuilder: FC<IProps> = ({items, form, options, onAddControl}) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        {items.map((item, index) => (
          <MenuItem key={index} title={l10n(item)} type={item} onClick={onAddControl} />
        ))}
      </div>
      <div className={cn(style.content, 'scroll')}>{form}</div>
      <div className={style.settings}>{options}</div>
    </div>
  );
};
