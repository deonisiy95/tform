import {useSelector} from 'react-redux';
import {selectWidgets} from 'src/widgets/selectors';
import {useCallback} from 'react';

export const useWidgetName = () => {
  const widgets = useSelector(selectWidgets);

  return useCallback(
    (widgetId: string) => {
      return widgets.find(item => item.widgetId === widgetId)?.name;
    },
    [widgets]
  );
};
