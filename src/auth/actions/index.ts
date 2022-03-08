import {createAction} from '@reduxjs/toolkit';
import {ISignUpData, IToken} from 'src/auth/@types';

const prefix = 'AUTH';

const actions = {
  login: createAction(`${prefix}_LOGIN`, (email: string, password: string) => ({
    payload: {
      email,
      password
    }
  })),

  signUp: createAction(`${prefix}_SIGN_UP`, (data: ISignUpData) => ({
    payload: data
  })),

  setToken: createAction(`${prefix}_SET_TOKEN`, (token: IToken) => ({
    payload: token
  })),

  setLoading: createAction(`${prefix}_SET_LOADING`, (loading: boolean) => ({
    payload: loading
  }))
};

export default actions;
