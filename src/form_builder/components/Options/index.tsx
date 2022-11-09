import React, {FC, useCallback, useMemo} from 'react';
import {TCanRequireControl, TControl} from 'src/form_builder/@types/formBuilder';
import {TextOptions} from './Controls/Text';
import {TitleOptions} from './Controls/Title';
import {InputOptions} from './Controls/Input';
import {ActionsButtons} from './ActionsButtons';

import style from './style.less';
import {CheckBoxOptions} from 'src/form_builder/components/Options/Controls/Checkbox';
import Checkbox from 'UI/Checkbox';

const CAN_REQUIRE_CONTROL = ['input', 'checkbox'];

interface IProps {
  index: number;
  control: TControl;
  onChange: (value: TControl['value']) => void;
  onUp: (index: number) => void;
  onDown: (index: number) => void;
  onDelete: (index: number) => void;
}

export const SettingsControl: FC<IProps> = ({control, onChange, onUp, onDown, onDelete, index}) => {
  const controlOptions = useMemo(() => {
    switch (control.type) {
      case 'text':
        return <TextOptions value={control.value} onChange={onChange} />;
      case 'title':
        return <TitleOptions value={control.value} onChange={onChange} />;
      case 'input':
        return <InputOptions value={control.value} onChange={onChange} />;
      case 'checkbox':
        return <CheckBoxOptions value={control.value} onChange={onChange} />;
      default:
        return null;
    }
  }, [control.value]);

  const upHandler = useCallback(() => onUp(index), [index]);
  const downHandler = useCallback(() => onDown(index), [index]);
  const deleteHandler = useCallback(() => onDelete(index), [index]);

  const showRequireOption =
    CAN_REQUIRE_CONTROL.includes(control.type) &&
    'is_require' in (control as TCanRequireControl).value;
  const isRequire = showRequireOption && (control as TCanRequireControl).value.is_require;

  const requireHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target?.checked;
      const ctrl = control as TCanRequireControl;

      if (newValue === ctrl.value.is_require) {
        return;
      }

      onChange({
        ...ctrl.value,
        is_require: newValue
      });
    },
    [control, onChange]
  );

  return (
    <div className={style.options} key={index}>
      {controlOptions}
      {showRequireOption ? (
        <Checkbox checked={isRequire} onChange={requireHandler}>
          {l10n('is_require')}
        </Checkbox>
      ) : null}
      <ActionsButtons onUp={upHandler} onDown={downHandler} onDelete={deleteHandler} />
    </div>
  );
};
