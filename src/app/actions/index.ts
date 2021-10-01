import {createAction} from '@reduxjs/toolkit';

const prefix = 'APP';

const actions = {
  initApp: createAction(`${prefix}_INIT`)
};

export default actions;
