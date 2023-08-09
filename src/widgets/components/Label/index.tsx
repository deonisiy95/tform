import React, {FC, useState} from 'react';
import style from './style.less';
import {TLabelForm} from 'src/form_builder/@types/formBuilder';
import useInput from 'src/core/hooks/useInput';
import {Validation} from 'src/core/utils/validation';
import Input from 'UI/Input';
import Button from 'UI/Button';
import Field from 'UI/Field';

interface IProps {
  label: TLabelForm;
  onSave: (label: TLabelForm) => Promise<void>;
}

export const LabelWidgetComponent: FC<IProps> = ({label, onSave}) => {
  const [saving, setSaving] = useState(false);
  const {value: newText, onChange, invalid} = useInput(label?.text ?? '', [Validation.notEmpty]);

  const saveHandler = async () => {
    setSaving(true);
    await onSave({...label, text: newText});
    setSaving(false);
  };

  return (
    <div className={style.labelPage}>
      <h3>{l10n('widget.settings.label.title')}</h3>
      <p>{l10n('widget.settings.label.text')}</p>
      <div className={style.labelSettings}>
        <div>
          <Field title={l10n('widget.settings.label.field.text')}>
            <Input value={newText} onChange={onChange} invalid={invalid} />
          </Field>
          <div>{label?.color}</div>
          <div>{label?.icon}</div>
        </div>
        <div className={style.viewLabel}>

        </div>
      </div>
      <div className={style.controls}>
        <Button onClick={saveHandler} size={'sm'} isLoad={saving}>
          {l10n('save')}
        </Button>
      </div>
    </div>
  );
};
