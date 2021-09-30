import {createAction} from '@reduxjs/toolkit';
import {IToken} from 'src/app/@types';

const prefix = 'APP';

const actions = {
  signIn: createAction(`${prefix}_SET_TOKEN`, (email: string, password: string) => ({
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
