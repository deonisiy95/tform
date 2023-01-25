import React, {FC} from 'react';
import {SettingsWidgetComponent} from 'src/widgets/components/Settings';
import {useSelector} from 'react-redux';
import {selectWidget} from 'src/widgets/selectors';
import {Options} from 'src/widgets/controllers/Options';
import {FormBuilderController} from 'src/form_builder/controllers';

interface IProps {
  widget_id: string;
}

export const SettingsWidget: FC<IProps> = ({widget_id}) => {
  const widget = useSelector(state => selectWidget(state, widget_id));

  return (
    <SettingsWidgetComponent
      name={widget?.name}
      options={
        <Options
          widgetId={widget?.widgetId}
          name={widget?.name}
          token={widget?.token}
          agents={widget?.agents}
        />
      }
      design={<FormBuilderController widgetId={widget?.widgetId}/>}
    />
  );
};
