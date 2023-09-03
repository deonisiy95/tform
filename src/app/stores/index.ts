import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppStore} from 'src/app/@types';
import {isMobile} from 'src/core/utils/isMobile';

const initialState: IAppStore = {
  isMobileWarning: isMobile()
};

export const appSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    setMobileWarning: (state, action: PayloadAction<boolean>) => {
      state.isMobileWarning = action.payload;
    }
  }
});

export const appActions = appSlice.actions;
export const appReducers = appSlice.reducer;
