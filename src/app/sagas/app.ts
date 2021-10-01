import {call} from 'redux-saga/effects';
import {renderApp} from 'src/app';

export function* initApp() {
  yield call(renderApp);
}
