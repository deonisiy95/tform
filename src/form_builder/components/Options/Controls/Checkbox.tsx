import React, {FC} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TControl, ICheckBoxControl} from 'src/form_builder/@types/formBuilder';
import {useFieldChange} from 'src/form_builder/hooks/useFieldChange';

interface IProps {
  value: ICheckBoxControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const CheckBoxOptions: FC<IProps> = ({value, onChange}) => {
  const handleChangeText = useFieldChange('text', value, onChange);

  return (
    <>
      <Field title={l10n('text')}>
        <Input
          autoFocus={true}
          value={value.text}
          placeholder={l10n('enter.text')}
          onChange={handleChangeText}
        />
      </Field>
    </>
  );
};
