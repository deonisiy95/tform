import {createSelector} from 'reselect';

import {TStore} from 'src/store';

export const selectStore = (state: TStore) => {
  return state.auth;
};

export const selectIsAuth = createSelector(selectStore, auth => auth.isAuth);

export const selectAuthLoading = createSelector(selectStore, auth => auth.loading);

export const selectAuthError = createSelector(selectStore, auth => auth.error.login);

export const selectAuthProcessing = createSelector(selectStore, auth => auth.processing.login);

export const selectSingUpError = createSelector(selectStore, auth => auth.error.signup);

export const selectSingUpProcessing = createSelector(selectStore, auth => auth.processing.signup);
