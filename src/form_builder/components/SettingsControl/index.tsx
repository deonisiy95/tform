import React, {FC, useCallback, useMemo} from 'react';
import {TControl} from 'src/form_builder/@types/formBuilder';
import {TextOptions} from 'src/form_builder/components/SettingsControl/Text';
import {TitleOptions} from 'src/form_builder/components/SettingsControl/Title';
import {InputOptions} from 'src/form_builder/components/SettingsControl/Input';
import style from './style.less';
import {ActionsButtons} from 'src/form_builder/components/SettingsControl/ActionsButtons';

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
      default:
        return null;
    }
  }, [control]);

  const upHandler = useCallback(() => onUp(index), [index]);
  const downHandler = useCallback(() => onDown(index), [index]);
  const deleteHandler = useCallback(() => onDelete(index), [index]);

  return (
    <div className={style.options}>
      {controlOptions}
      <ActionsButtons onUp={upHandler} onDown={downHandler} onDelete={deleteHandler} />
    </div>
  );
};
