import React, {FC} from 'react';
import style from './style.less';
import {IInputControl} from 'src/form_builder/@types/formBuilder';
import Field from 'UI/Field';

interface IProps {
  value: IInputControl['value'];
}

export const InputControl: FC<IProps> = ({value}) => {
  return (
    <div className={style.control}>
      <Field title={value.title || l10n('enter.title')} text={value.text}>
        <div className={style.input}>{value.placeholder}</div>
      </Field>
    </div>
  );
};
