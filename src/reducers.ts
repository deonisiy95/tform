import {authReducer} from 'src/auth/reducers';
import {widgetReducers} from 'src/widgets/stores';
import {accountReducers} from 'src/account/stores';

export const reducers = {
  auth: authReducer,
  widgets: widgetReducers,
  account: accountReducers
};
