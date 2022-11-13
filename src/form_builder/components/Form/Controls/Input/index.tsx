import React, {FC} from 'react';
import style from './style.less';
import {IInputControl} from 'src/form_builder/@types/formBuilder';
import Field from 'UI/Field';
import {RequiredMark} from 'src/form_builder/components/Form/Required';

interface IProps {
  value: IInputControl['value'];
}

export const InputControl: FC<IProps> = ({value}) => {
  return (
    <div className={style.control}>
      <Field
        title={
          <>
            {value.is_require ? <RequiredMark /> : null}
            {value.title || l10n('enter.title')}
          </>
        }
        text={value.text}
      >
        <div className={style.input}>{value.placeholder}</div>
      </Field>
    </div>
  );
};
