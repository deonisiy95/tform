import {call, put} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import Api from 'src/core/scripts/api';
import {navigate} from 'src/core/scripts/navigation';

export function* signIn(action: ReturnType<typeof actions.signIn>) {
  const {email, password} = action.payload;

  try {
    const result = yield call(Api.send, 'signin', 'POST', {
      email,
      password
    });

    yield put(actions.setToken(result.tokens));

    yield call(navigate, '/');
  } catch (error) {
    console.error('Login error', error);
  }
}
