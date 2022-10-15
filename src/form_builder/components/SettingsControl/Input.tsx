import React, {FC} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TControl, IInputControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  value: IInputControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const InputOptions: FC<IProps> = ({value, onChange}) => {
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value?.trim();

    if (newValue === value.title) {
      return;
    }

    onChange({
      ...value,
      title: newValue
    });
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value?.trim();

    if (newValue === value.text) {
      return;
    }

    onChange({
      ...value,
      text: newValue
    });
  };

  return (
    <>
      <Field title={l10n('title')}>
        <Input
          defaultValue={value.title}
          placeholder={l10n('enter.title')}
          onChange={onChangeTitle}
        />
      </Field>
      <Field title={l10n('description')}>
        <Input
          defaultValue={value.text}
          placeholder={l10n('description')}
          onChange={onChangeDescription}
        />
      </Field>
    </>
  );
};
