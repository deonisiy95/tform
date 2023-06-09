import React from 'react';
import {SettingsWidgetComponent} from 'src/widgets/components/Settings';
import {useSelector} from 'react-redux';
import {selectWidget} from 'src/widgets/selectors';
import {Options} from 'src/widgets/controllers/Options';
import {InstallWidget} from 'src/widgets/controllers/Install';
import {FormBuilderController} from 'src/form_builder/controllers';
import {useParams} from 'react-router-dom';
import {Page} from 'UI/Page';

export const SettingsWidget = () => {
  const {id: widget_id} = useParams<{id: string}>();
  const widget = useSelector(state => selectWidget(state, widget_id));

  return (
    <Page title={`${l10n('widget.settings.title')} ${widget?.name}`}>
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
        design={<FormBuilderController widgetId={widget?.widgetId} />}
        install={<InstallWidget widgetId={widget?.widgetId} />}
      />
    </Page>
  );
};
