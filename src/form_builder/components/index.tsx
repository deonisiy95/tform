import React, {FC} from 'react';
import style from './style.less';
import {MenuItem} from 'src/form_builder/components/MenuItem';

export const FormBuilder: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <MenuItem type={'Input'} title={'input'} onClick={t => console.log(t)} />
        <MenuItem type={'Checkbox'} title={'checkbox'} onClick={t => console.log(t)} />
        <MenuItem type={'Text'} title={'text'} onClick={t => console.log(t)} />
      </div>
      <div className={style.content}></div>
      <div className={style.settings}></div>
    </div>
  );
};
