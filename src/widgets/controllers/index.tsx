import React, {useCallback} from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';
import {Modal} from 'UI/Modal';
import AddWidget from 'src/widgets/controllers/Add';
import {navigate} from 'src/core/scripts/navigation';
import {Page} from 'UI/Page';
import {localization} from 'src/l10n';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);
  const openSettings = useCallback((id: string) => {
    navigate(`/widgets/${id}`);
  }, []);
  const openSimulatePage = useCallback(
    (id: string) => {
      const widget = widgets.find(item => item.widgetId === id);

      if (!widget) {
        console.log('Error open simulate page: don`t find widget');
        return;
      }

      const params = new URLSearchParams({
        name: widget.name,
        widget_id: id,
        lang: localization.getLocale()
      });

      window.open('/simulate_page.html?' + params, '_blank');
    },
    [widgets]
  );

  const openAdd = useCallback(() => {
    const popup = Modal(<AddWidget close={() => popup.close()} />, {noPadding: true});
  }, []);

  return (
    <Page title={l10n('widgets')}>
      <Widgets
        widgets={widgets}
        loading={loading}
        onSettings={openSettings}
        onAdd={openAdd}
        onSimulate={openSimulatePage}
      />
    </Page>
  );
}
