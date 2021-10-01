import {createReducer} from '@reduxjs/toolkit';
import actions from 'src/auth/actions';
import {NSAuth} from 'src/auth/@types';

const initialState: NSAuth.IStore = {
  isAuth: false,
  tokens: {
    accessToken: null,
    refreshToken: null
  }
};

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(actions.setToken, (state, action) => {
    state.isAuth = true;
    state.tokens = action.payload;
  });
});
