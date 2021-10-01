import {createAction} from '@reduxjs/toolkit';
import {IToken} from 'src/auth/@types';

const prefix = 'AUTH';

const actions = {
  signIn: createAction(`${prefix}_SIGN_IN`, (email: string, password: string) => ({
    payload: {
      email,
      password
    }
  })),

  setToken: createAction(`${prefix}_SET_TOKEN`, (token: IToken) => ({
    payload: token
  }))
};

export default actions;
