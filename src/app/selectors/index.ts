import {createSelector} from 'reselect';
import {TStore} from 'src/store';

export const selectStore = (state: TStore) => {
  return state.app;
};

export const selectIsMobileWarning = createSelector(selectStore, app => app.isMobileWarning);
