import {createSelector} from 'reselect';

import {TStore} from 'src/store';

export const selectStore = (state: TStore) => {
  return state.auth;
};

export const selectIsAuth = createSelector(selectStore, app => app.isAuth);
