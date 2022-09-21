import React, {FC, useMemo} from 'react';
import {TControl} from 'src/form_builder/@types/formBuilder';
import {TextOptions} from 'src/form_builder/components/SettingsControl/Title';
import {TitleOptions} from 'src/form_builder/components/SettingsControl/Text';

interface IProps {
  control: TControl;
}

export const SettingsControl: FC<IProps> = ({control}) => {
  const controlOptions = useMemo(() => {
    switch (control.type) {
      case 'text':
        return <TextOptions control={control} />;
      case 'title':
        return <TitleOptions control={control} />;
      default:
        return null;
    }
  }, [control]);

  return <div>{controlOptions}</div>;
};
