import React, {useCallback, useState} from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';
import Settings from 'src/widgets/components/Settings';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);
  const [settingsIsOpen, setOpenSettings] = useState(false);
  const openSettings = useCallback((id: string) => {
    console.log(id);
    setOpenSettings(true);
  }, [settingsIsOpen]);

  return (
    <>
      <Widgets widgets={widgets} loading={loading} onSettings={openSettings}/>
      <Settings open={true} />
    </>
  );
}
