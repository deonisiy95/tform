import React, {FC} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TControl, ITextControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  value: ITextControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const TextOptions: FC<IProps> = ({value, onChange}) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value?.trim();

    if (newValue === value) {
      return;
    }

    onChange(newValue);
  };

  return (
    <Field title={l10n('text')}>
      <Input defaultValue={value} placeholder={l10n('enter.text')} onChange={onChangeInput} />
    </Field>
  );
};
