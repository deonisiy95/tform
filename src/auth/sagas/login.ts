import {call, put} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import Api from 'src/core/scripts/api';
import {navigate} from 'src/core/scripts/navigation';
import {localStorage} from 'src/core/scripts/localStorage';
import TokenService from 'src/auth/services/token';

export function* login(action: ReturnType<typeof actions.login>) {
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

export function* checkLogin() {
  const token = yield call(localStorage.getItem, 'token');

  if (token) {
    TokenService.setToken(token);
    yield put(actions.setToken(token));
  }
}
