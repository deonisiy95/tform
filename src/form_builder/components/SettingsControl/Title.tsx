import React, {FC} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TTextControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  control: TTextControl;
}

export const TextOptions: FC<IProps> = ({control}) => {
  return (
    <Field title={l10n('text')} >
      <Input defaultValue={control.value} placeholder={l10n('enter.title')} />
    </Field>
  );
};
