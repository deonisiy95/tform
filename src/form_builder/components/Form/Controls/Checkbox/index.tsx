import React, {FC} from 'react';
import {ICheckBoxControl} from 'src/form_builder/@types/formBuilder';
import Checkbox from 'UI/Checkbox';
import style from './style.less';

interface IProps {
  value: ICheckBoxControl['value'];
}

export const CheckBoxControl: FC<IProps> = ({value}) => {
  return (
    <Checkbox inactive={true} checked={true}>
      <div className={style.text}>{value.text || l10n('enter.text')}</div>
    </Checkbox>
  );
};
