import React, {FC, useState, useEffect, useMemo} from 'react';
import style from './style.less';
import {TLabelForm} from 'src/form_builder/@types/formBuilder';
import useInput from 'src/core/hooks/useInput';
import Input from 'UI/Input';
import Button from 'UI/Button';
import Field from 'UI/Field';
import {WidgetButton} from 'src/widgets/components/WidgetButton';
import Icon from 'UI/Icon';
import {RadioElements} from 'UI/RadioElements';

interface IProps {
  labelData: TLabelForm;
  onSave: (label: TLabelForm) => Promise<void>;
}

const COLORS = [
  '#D1D3D4',
  '#BCCCE0',
  '#5199FF',
  '#BCD39C',
  '#45D09E',
  '#9E6240',
  '#BF98A0',
  '#FF756B',
  '#F7717D',
  '#DEA47E',
  '#D8664D'
];

const ICONS = ['mail', 'question', 'shopping'];

export const LabelWidgetComponent: FC<IProps> = ({labelData, onSave}) => {
  const [label, setLabel] = useState<TLabelForm>(labelData);
  const [color, setColor] = useState<string>(labelData?.color);
  const [icon, setIcon] = useState<string>(labelData?.icon);
  const [saving, setSaving] = useState(false);
  const {value: newText, onChange, invalid} = useInput(label?.text ?? '', []);

  const colorsList = useMemo(
    () =>
      COLORS.map(color => ({
        value: color,
        element: <div key={color} className={style.listItem} style={{background: color}} />
      })),
    []
  );

  const iconList = useMemo(
    () =>
      ICONS.map(icon => ({
        value: icon,
        element: <Icon className={style.listItem} key={icon} type={icon} />
      })),
    []
  );

  useEffect(() => {
    setLabel({text: newText, icon, color});
  }, [newText, icon, color]);

  const saveHandler = async () => {
    setSaving(true);
    await onSave(label);
    setSaving(false);
  };

  return (
    <div className={style.labelPage}>
      <h3>{l10n('widget.settings.label.title')}</h3>
      <p>{l10n('widget.settings.label.text')}</p>
      <div className={style.labelSettings}>
        <div className={style.labelOptions}>
          <Field
            title={l10n('widget.settings.label.field.text')}
            text={l10n('widget.settings.label.field.text.description')}
          >
            <Input value={newText} onChange={onChange} invalid={invalid} maxLength={40} />
          </Field>
          <Field title={l10n('widget.settings.label.field.color')}>
            <RadioElements elements={colorsList} value={color} onChange={setColor} />
          </Field>
          <Field title={l10n('widget.settings.label.field.icon')}>
            <RadioElements elements={iconList} value={icon} onChange={setIcon} />
          </Field>
        </div>
        <div className={style.viewLabel}>
          <WidgetButton icon={label?.icon} color={label?.color} text={label?.text} />
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
