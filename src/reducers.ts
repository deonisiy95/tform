import {authReducer} from 'src/auth/reducers';
import {widgetReducers} from 'src/widgets/stores';

export const reducers = {
  auth: authReducer,
  widgets: widgetReducers
};
