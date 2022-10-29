import React, {FC} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TControl, IInputControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  value: IInputControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const InputOptions: FC<IProps> = ({value, onChange}) => {
  const handleChange = (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value?.trim();

    if (newValue === value[type]) {
      return;
    }

    onChange({
      ...value,
      [type]: newValue
    });
  };

  return (
    <>
      <Field title={l10n('title')}>
        <Input
          autoFocus={true}
          value={value.title}
          placeholder={l10n('enter.title')}
          onChange={handleChange('title')}
        />
      </Field>
      <Field title={l10n('description')}>
        <Input
          value={value.text}
          placeholder={l10n('description')}
          onChange={handleChange('text')}
        />
      </Field>
      <Field title={l10n('placeholder')}>
        <Input
          value={value.placeholder}
          placeholder={l10n('placeholder')}
          onChange={handleChange('placeholder')}
        />
      </Field>
    </>
  );
};
