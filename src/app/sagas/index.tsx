import {takeEvery} from 'redux-saga/effects';
import actions from 'src/app/actions';
import {signIn} from 'src/app/sagas/login';

export default function* appSaga() {
  yield takeEvery(actions.signIn, signIn);
}
