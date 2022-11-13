import React, {FC} from 'react';
import {ICheckBoxControl} from 'src/form_builder/@types/formBuilder';
import Checkbox from 'UI/Checkbox';
import {RequiredMark} from 'src/form_builder/components/Form/Required';

interface IProps {
  value: ICheckBoxControl['value'];
}

export const CheckBoxControl: FC<IProps> = ({value}) => {
  return (
    <Checkbox inactive={true} checked={true}>
      {value.is_require ? <RequiredMark /> : null}
      {value.text || l10n('enter.text')}
    </Checkbox>
  );
};
