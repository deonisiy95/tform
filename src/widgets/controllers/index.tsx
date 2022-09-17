import React, {useCallback} from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';
import {Modal} from 'UI/Modal';
import AddWidget from 'src/widgets/controllers/Add';
import {SettingsWidget} from 'src/widgets/controllers/Settings';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);
  const openSettings = useCallback((id: string) => {
    console.log(id);

    Modal(<SettingsWidget widget_id={id}/>);
  }, []);

  const openAdd = useCallback(() => {
    const popup = Modal(<AddWidget close={() => popup.close()} />, {noPadding: true});
  }, []);

  return <Widgets widgets={widgets} loading={loading} onSettings={openSettings} onAdd={openAdd} />;
}
