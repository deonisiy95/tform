import {createSelector} from 'reselect';

import {TStore} from 'src/store';

export const selectStore = (state: TStore) => {
  return state.widgets;
};

export const selectWidgets = createSelector(selectStore, widgets => widgets.data);

export const selectWidget = createSelector(
  selectStore,
  (_state, widgetId: string) => widgetId,
  (widgets, id) => {
    return widgets.data?.find(item => item.widgetId === id);
  }
);

export const selectWidgetsLoading = createSelector(selectStore, widgets => widgets.loading);
