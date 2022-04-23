import {createSelector} from 'reselect';

import {TStore} from 'src/store';

export const selectStore = (state: TStore) => {
  return state.auth;
};

export const selectIsAuth = createSelector(selectStore, app => app.isAuth);

export const selectAuthLoading = createSelector(selectStore, app => app.loading);

export const selectAuthError = createSelector(selectStore, app => app.error);

export const selectAuthProcessing = createSelector(selectStore, app => app.processing);
