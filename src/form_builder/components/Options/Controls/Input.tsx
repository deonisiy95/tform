import React, {FC, useCallback} from 'react';
import Input from 'UI/Input';
import Field from 'UI/Field';
import {TControl, IInputControl} from 'src/form_builder/@types/formBuilder';
import {useFieldChange} from 'src/form_builder/hooks/useFieldChange';
import Checkbox from 'UI/Checkbox';

interface IProps {
  value: IInputControl['value'];
  onChange: (value: TControl['value']) => void;
}

export const InputOptions: FC<IProps> = ({value, onChange}) => {
  const handleChangeTitle = useFieldChange('title', value, onChange);
  const handleChangeText = useFieldChange('text', value, onChange);
  const handleChangePlaceholder = useFieldChange('placeholder', value, onChange);
  const handlerMultilineMark = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target?.checked;

      if (newValue === value.is_multiline) {
        return;
      }

      onChange({
        ...value,
        is_multiline: newValue
      });
    },
    [value, onChange]
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
      <Field title={l10n('placeholder')}>
        <Input
          value={value.placeholder}
          placeholder={l10n('placeholder')}
          onChange={handleChangePlaceholder}
        />
      </Field>
      <Checkbox checked={value.is_multiline} onChange={handlerMultilineMark}>
        {l10n('is_multiline')}
      </Checkbox>
    </>
  );
};
