import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {accountApiActions} from 'src/account/actions/api';

const initialState: TAccountStore = {
  email: '',
  name: ''
};

export const getAccountInfo = createAsyncThunk('account/get', async () => {
  try {
    const result = await accountApiActions.get();

    return result.account;
  } catch (error) {
    console.log('Error get account info', error);
  }
});

export const accountSlice = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAccountInfo.fulfilled, (state, action) => {
      state.email = action.payload?.email ?? '';
      state.name = action.payload?.name ?? '';
    });
  }
});

const accountReducers = accountSlice.reducer;
const accountActions = accountSlice.actions;

export {accountReducers, accountActions};
