import React, {FC} from 'react';
import {ICheckBoxControl} from 'src/form_builder/@types/formBuilder';
import Checkbox from 'UI/Checkbox';

interface IProps {
  value: ICheckBoxControl['value'];
}

export const CheckBoxControl: FC<IProps> = ({value}) => {
  return (
    <Checkbox inactive={true} checked={true}>
      {value.text || l10n('enter.text')}
    </Checkbox>
  );
};
