import {takeEvery, put} from 'redux-saga/effects';
import appActions from 'src/app/actions';
import {getAccountInfo} from 'src/account/stores';

function* loadingAccount(): Generator {
  yield put(getAccountInfo() as never);
}

export default function* accountsSaga() {
  yield takeEvery(appActions.startApp, loadingAccount);
}
