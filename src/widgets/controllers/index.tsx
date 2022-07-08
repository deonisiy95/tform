import React, {useCallback, useState} from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';
import {Modal} from 'UI/Modal';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);
  const [settingsIsOpen, setOpenSettings] = useState(false);
  const openSettings = useCallback((id: string) => {
    console.log(id);
    setOpenSettings(true);

    Modal(<div>Hello</div>);
  }, [settingsIsOpen]);

  return (
    <>
      <Widgets widgets={widgets} loading={loading} onSettings={openSettings}/>
    </>
  );
}
