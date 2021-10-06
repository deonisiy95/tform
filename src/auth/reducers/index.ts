import {createReducer} from '@reduxjs/toolkit';
import actions from 'src/auth/actions';
import {NSAuth} from 'src/auth/@types';

const initialState: NSAuth.IStore = {
  isAuth: false,
  tokens: {
    accessToken: null,
    refreshToken: null
  },
  loading: true
};

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.setToken, (state, action) => {
      const tokens = action.payload;
      state.isAuth = !!tokens;
      state.tokens = tokens;
    })
    .addCase(actions.setLoading, (state, action) => {
      state.loading = action.payload;
    });
});
