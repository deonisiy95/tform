import {createSelector} from 'reselect';

import {TStore} from 'src/store';

export const selectStore = (state: TStore) => {
  return state.account;
};

export const selectAccount = createSelector(selectStore, account => account);
