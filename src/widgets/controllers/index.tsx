import React from 'react';
import Widgets from 'src/widgets/components/Widgets';
import {useSelector} from 'react-redux';
import {selectWidgets, selectWidgetsLoading} from 'src/widgets/selectors';

export default function WidgetsController() {
  const widgets = useSelector(selectWidgets);
  const loading = useSelector(selectWidgetsLoading);

  return <Widgets widgets={widgets} loading={loading}/>;
}

