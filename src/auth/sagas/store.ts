import {call} from 'redux-saga/effects';
import {localStorage} from 'src/core/scripts/localStorage';
import actions from 'src/auth/actions';

export function* onSaveToken(action: ReturnType<typeof actions.setToken>) {
  const token = action.payload;
  yield call(localStorage.setItem, 'token', token);
}
