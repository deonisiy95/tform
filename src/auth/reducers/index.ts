import {createReducer} from '@reduxjs/toolkit';
import actions from 'src/auth/actions';
import {NSAuth} from 'src/auth/@types';

const initialState: NSAuth.IStore = {
  isAuth: false,
  tokens: {
    accessToken: null,
    refreshToken: null
  },
  loading: true,
  processing: {
    login: false,
    signup: false
  },
  error: {
    login: null,
    signup: null
  }
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
    })
    .addCase(actions.setError, (state, action) => {
      state.error.login = action.payload;
    })
    .addCase(actions.setProcessing, (state, action) => {
      state.processing.login = action.payload;
    })
    .addCase(actions.setSingUpError, (state, action) => {
      state.error.signup = action.payload;
    })
    .addCase(actions.setSingUpProcessing, (state, action) => {
      state.processing.signup = action.payload;
    });
});
