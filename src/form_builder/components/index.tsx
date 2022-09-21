import React, {FC} from 'react';
import style from './style.less';
import {MenuItem} from 'src/form_builder/components/MenuItem';
import {TTypeControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  onAddControl?: (type: TTypeControl) => void;
  form: React.ReactNode;
  options: React.ReactNode;
}

export const FormBuilder: FC<IProps> = ({form, options, onAddControl}) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <MenuItem type={'Input'} title={'input'} onClick={() => onAddControl('input')} />
        <MenuItem type={'Checkbox'} title={'checkbox'} onClick={() => onAddControl('title')} />
        <MenuItem type={'Text'} title={'text'} onClick={() => onAddControl('text')} />
      </div>
      <div className={style.content}>{form}</div>
      <div className={style.settings}>{options}</div>
    </div>
  );
};
