import {takeEvery} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import appActions from 'src/app/actions';
import {login, checkLogin} from 'src/auth/sagas/login';
import {onSaveToken} from 'src/auth/sagas/store';

export default function* authSaga() {
  yield takeEvery(actions.login, login);
  yield takeEvery(actions.setToken, onSaveToken);
  yield takeEvery(appActions.initApp, checkLogin);
}
