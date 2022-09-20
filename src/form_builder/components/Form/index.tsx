import React, {FC} from 'react';
import style from './style.less';
import {FormItem} from 'src/form_builder/components/FormItem';
import {TextControl} from 'src/form_builder/components/TextControl';

export const Form: FC = () => {
  return (
    <div className={style.form}>
      <FormItem isActive={false}>
        <TextControl value={'Pyfxb'} />
      </FormItem>
    </div>
  );
};
