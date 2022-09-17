import React, {FC} from 'react';
import {SettingsWidgetComponent} from 'src/widgets/components/Settings';
import {FormBuilder} from 'src/form_builder/components';
import {useSelector} from 'react-redux';
import {selectWidget} from 'src/widgets/selectors';

interface IProps {
  widget_id: string;
}

export const SettingsWidget: FC<IProps> = ({widget_id}) => {
  const widget = useSelector(state => selectWidget(state, widget_id));

  return (
    <SettingsWidgetComponent
      name={widget?.name}
      options={<div></div>}
      design={<FormBuilder />}
    />
  );
};
