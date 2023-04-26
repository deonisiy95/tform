import {call, put, delay} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import appActions from 'src/app/actions';
import Api from 'src/core/scripts/api';
import {navigate} from 'src/core/scripts/navigation';
import {localStorage} from 'src/core/scripts/localStorage';
import TokenService from 'src/auth/services/token';

const TIME_SPLASH_SCREEN = 2000;
const LOGIN_ERRORS = {
  invalid_credentials: 'Неправильный email или пароль'
};

export function* login(action: ReturnType<typeof actions.login>) {
  const {email, password} = action.payload;

  try {
    yield put(actions.setProcessing(true));
    yield put(actions.setError(null));

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

    yield put(appActions.startApp());
  } catch (error) {
    yield delay(500);

    console.error('Login error', error);

    const message = LOGIN_ERRORS[error?.error];

    if (message) {
      yield put(actions.setError(message));

      yield delay(2000);

      yield put(actions.setError(null));
    }
  } finally {
    yield put(actions.setProcessing(false));
  }
}

export function* checkLogin() {
  const token = yield call(localStorage.getItem, 'token');

  if (token) {
    yield call(TokenService.setToken, token);
    yield call(TokenService.getToken);
  }

  yield delay(TIME_SPLASH_SCREEN);
  yield call(navigate, '/');
  yield put(actions.setLoading(false));
  yield put(appActions.startApp());
}

export function* logout() {
  try {
    yield call(Api.send, 'logout', 'POST');
    yield call(TokenService.setToken, null);
    yield call(navigate, '/');
  } catch (error) {
    console.log('Error logout', error);
  }
}
