import {createSelector} from 'reselect';

import {TStore} from 'src/store';

export const selectApp = (state: TStore) => {
  return state.app;
};

export const selectIsAuth = createSelector(selectApp, app => app.auth);
