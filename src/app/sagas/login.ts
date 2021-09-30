import {call, put} from 'redux-saga/effects';
import actions from 'src/app/actions';
import Api from 'src/core/scripts/api';

export function* signIn(action: ReturnType<typeof actions.signIn>) {
  const {email, password} = action.payload;

  try {
    const result = yield call(Api.send,'signin', 'POST', {
      email,
      password
    });

    yield put(actions.setToken(result));
  } catch (error) {
    console.error('Login error', error);
  }
}
