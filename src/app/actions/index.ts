import {createAction} from '@reduxjs/toolkit';

const prefix = 'APP';

const actions = {
  initApp: createAction(`${prefix}_INIT`),
  startApp: createAction(`${prefix}_START`),
};

export default actions;
