import React, {useCallback} from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';
import {Modal} from 'UI/Modal';
import AddWidget from 'src/widgets/controllers/Add';
import {navigate} from 'src/core/scripts/navigation';
import {Page} from 'UI/Page';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);
  const openSettings = useCallback((id: string) => {
    navigate(`/widgets/${id}`);
  }, []);

  const openAdd = useCallback(() => {
    const popup = Modal(<AddWidget close={() => popup.close()} />, {noPadding: true});
  }, []);

  return (
    <Page title={l10n('widgets')}>
      <Widgets widgets={widgets} loading={loading} onSettings={openSettings} onAdd={openAdd} />
    </Page>
  );
}
