import {takeEvery, put} from 'redux-saga/effects';
import appActions from 'src/app/actions';
import {getWidgets} from 'src/widgets/stores';

function* loadingWidgets(): Generator {
  yield put(getWidgets() as never);
}

export default function* widgetsSaga() {
  yield takeEvery(appActions.startApp, loadingWidgets);
}
