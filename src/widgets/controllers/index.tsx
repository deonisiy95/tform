import React, {useCallback} from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';
import {Modal} from 'UI/Modal';
import AddWidget from 'src/widgets/controllers/Add';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);
  const openSettings = useCallback((id: string) => {
    console.log(id);

    Modal(<div>Hello</div>);
  }, []);

  const openAdd = useCallback(() => {
    console.log('add');

    Modal(<AddWidget />, {noPadding: true});
  }, []);

  return <Widgets widgets={widgets} loading={loading} onSettings={openSettings} onAdd={openAdd} />;
}
