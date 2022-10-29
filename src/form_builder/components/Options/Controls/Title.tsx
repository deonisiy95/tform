import React, {FC} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TControl, ITitleControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  value: ITitleControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const TitleOptions: FC<IProps> = ({value, onChange}) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value?.trim();

    if (newValue === value) {
      return;
    }

    onChange(newValue);
  };

  return (
    <Field title={l10n('title')}>
      <Input defaultValue={value} placeholder={l10n('enter.title')} onChange={onChangeInput} />
    </Field>
  );
};
