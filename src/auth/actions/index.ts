import {createAction} from '@reduxjs/toolkit';
import {IToken} from 'src/auth/@types';

const prefix = 'AUTH';

const actions = {
  login: createAction(`${prefix}_LOGIN`, (email: string, password: string) => ({
    payload: {
      email,
      password
    }
  })),

  setToken: createAction(`${prefix}_SET_TOKEN`, (token: IToken) => ({
    payload: token
  })),

  setLoading: createAction(`${prefix}_SET_LOADING`, (loading: boolean) => ({
    payload: loading
  }))
};

export default actions;
