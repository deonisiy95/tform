import {takeEvery} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import {signIn} from 'src/auth/sagas/login';

export default function* authSaga() {
  yield takeEvery(actions.signIn, signIn);
}
