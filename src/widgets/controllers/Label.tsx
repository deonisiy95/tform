import React, {FC, useCallback} from 'react';
import {LabelWidgetComponent} from 'src/widgets/components/Label';
import {TLabelForm} from 'src/form_builder/@types/formBuilder';
import {formApiActions} from 'src/form_builder/actions/api';

interface IProps {
  widgetId: string;
  labelData: TLabelForm;
}

export const LabelWidget: FC<IProps> = ({widgetId, labelData}) => {
  const onSaveFormLabel = useCallback(
    (label: TLabelForm) => {
      try {
        return formApiActions.update({widgetId, label});
      } catch (error) {
        console.error('Error save form', error);
      }
    },
    [widgetId]
  );

  return <LabelWidgetComponent labelData={labelData} onSave={onSaveFormLabel} />;
};
