import React, {FC} from 'react';
import style from './style.less';
import {MenuItem} from 'src/form_builder/components/Menu/Item';
import {TTypeControl} from 'src/form_builder/@types/formBuilder';
import cn from 'classnames';
import Button from 'UI/Button';

interface IProps {
  items: TTypeControl[];
  form: React.ReactNode;
  options: React.ReactNode;
  onAddControl: (type: TTypeControl) => void;
}

export const FormBuilder: FC<IProps> = ({items, form, options, onAddControl}) => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.menu}>
          {items.map((item, index) => (
            <MenuItem key={index} title={l10n(item)} type={item} onClick={onAddControl} />
          ))}
        </div>
        <div className={cn(style.content, 'scroll')}>{form}</div>
        <div className={cn(style.settings, 'scroll')}>{options}</div>
      </div>
      <div className={style.controls}>
        <Button className={style.buttonSave} size={'sm'} onClick={() => {}}>{l10n('save')}</Button>
      </div>
    </div>
  );
};
