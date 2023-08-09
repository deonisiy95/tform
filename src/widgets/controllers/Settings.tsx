import React, {useEffect, useState} from 'react';
import {SettingsWidgetComponent} from 'src/widgets/components/Settings';
import {useSelector} from 'react-redux';
import {selectWidget} from 'src/widgets/selectors';
import {Options} from 'src/widgets/controllers/Options';
import {InstallWidget} from 'src/widgets/controllers/Install';
import {FormBuilderController} from 'src/form_builder/controllers';
import {useParams} from 'react-router-dom';
import {Page} from 'UI/Page';
import {LabelWidget} from 'src/widgets/controllers/Label';
import {TForm, TLabelForm} from 'src/form_builder/@types/formBuilder';
import {formApiActions} from 'src/form_builder/actions/api';
import {asyncJsonParse} from 'src/core/utils/asyncParse';

export const SettingsWidget = () => {
  const {id: widget_id} = useParams<{id: string}>();
  const widget = useSelector(state => selectWidget(state, widget_id));
  const [form, setForm] = useState<TForm>([]);
  const [label, setLabel] = useState<TLabelForm>();

  useEffect(() => {
    formApiActions
      .get(widget?.widgetId)
      .then(formData => {
        setLabel(formData?.label);

        return asyncJsonParse(formData?.config || '');
      })
      .then(form => setForm(form as TForm))
      .catch(error => console.error('Error get form data', widget?.widgetId, error));
  }, [widget?.widgetId]);

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
        design={<FormBuilderController widgetId={widget?.widgetId} formData={form} />}
        install={<InstallWidget widgetId={widget?.widgetId} />}
        label={<LabelWidget widgetId={widget?.widgetId} labelData={label} />}
      />
    </Page>
  );
};
