import React, {FC, useCallback} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {SelectOptionsList} from './Options';
import {TControl, ISelectControl} from 'src/form_builder/@types/formBuilder';
import {useFieldChange} from 'src/form_builder/hooks/useFieldChange';

interface IProps {
  value: ISelectControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const SelectOptions: FC<IProps> = ({value, onChange}) => {
  const handleChangeTitle = useFieldChange('title', value, onChange);
  const handleChangeText = useFieldChange('text', value, onChange);
  const onChaneOption = useCallback(
    (options: ISelectControl['value']['options']) => {
      onChange({
        ...value,
        options
      });
    },
    [onChange, value]
  );

  return (
    <>
      <Field title={l10n('title')}>
        <Input
          autoFocus={true}
          value={value.title}
          placeholder={l10n('enter.title')}
          onChange={handleChangeTitle}
        />
      </Field>
      <Field title={l10n('description')}>
        <Input value={value.text} placeholder={l10n('description')} onChange={handleChangeText} />
      </Field>
      <Field title={l10n('options')}>
        <SelectOptionsList options={value.options} onChange={onChaneOption} />
      </Field>
    </>
  );
};
