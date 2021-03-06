import {takeEvery} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import appActions from 'src/app/actions';
import {login, checkLogin, logout} from 'src/auth/sagas/login';
import {signUp} from 'src/auth/sagas/signup';
import {onSaveToken} from 'src/auth/sagas/store';

export default function* authSaga() {
  yield takeEvery(actions.login, login);
  yield takeEvery(actions.logout, logout);
  yield takeEvery(actions.signUp, signUp);
  yield takeEvery(actions.setToken, onSaveToken);
  yield takeEvery(appActions.initApp, checkLogin);
}
