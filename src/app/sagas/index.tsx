import {takeEvery} from 'redux-saga/effects';
import {initApp} from 'src/app/sagas/app';
import actions from 'src/app/actions';

export default function* appSaga() {
  yield takeEvery(actions.initApp, initApp);
}
