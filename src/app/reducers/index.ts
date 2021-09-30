import {createReducer} from '@reduxjs/toolkit';
import actions from 'src/app/actions';
import {NSApp} from 'src/app/@types';

const initialState: NSApp.IStore = {
  auth: false,
  token: {
    accessToken: null,
    refreshToken: null
  }
};

export const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.setToken, (state, action) => {
      state.auth = true;
      state.token = action.payload;
    });
});
