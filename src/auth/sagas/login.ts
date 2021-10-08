import {call, put, delay} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import Api from 'src/core/scripts/api';
import {navigate} from 'src/core/scripts/navigation';
import {localStorage} from 'src/core/scripts/localStorage';
import TokenService from 'src/auth/services/token';

const TIME_SPLASH_SCREEN = 1000;

export function* login(action: ReturnType<typeof actions.login>) {
  const {email, password} = action.payload;

  try {
    const result = yield call(
      Api.send,
      'signin',
      'POST',
      {
        email,
        password
      },
      false
    );

    yield call(TokenService.setToken, result.tokens);

    yield call(navigate, '/');
  } catch (error) {
    console.error('Login error', error);
  }
}

export function* checkLogin() {
  const token = yield call(localStorage.getItem, 'token');

  if (token) {
    yield call(TokenService.setToken, token);
    yield call(TokenService.getToken);
  }

  yield delay(TIME_SPLASH_SCREEN);
  yield put(actions.setLoading(false));
  yield call(navigate, '/');
}
