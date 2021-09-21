import {createAction} from '@reduxjs/toolkit';

const prefix = 'APP';

const actions = {
  setToken: createAction(`${prefix}_SET_TOKEN`, (token: string) => ({
    payload: token
  }))
};

export default actions;
