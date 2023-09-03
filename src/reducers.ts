import {authReducer} from 'src/auth/reducers';
import {widgetReducers} from 'src/widgets/stores';
import {accountReducers} from 'src/account/stores';
import {appReducers} from 'src/app/stores';

export const reducers = {
  auth: authReducer,
  widgets: widgetReducers,
  account: accountReducers,
  app: appReducers
};
