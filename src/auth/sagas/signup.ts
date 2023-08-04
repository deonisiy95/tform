import {call, put, delay} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import {authApiActions} from 'src/auth/actions/api';
import {navigate} from 'src/core/scripts/navigation';
import TokenService from 'src/auth/services/token';
import {TIME_SPLASH_SCREEN} from 'src/auth/const';

const SIGN_UP_ERRORS = {
  user_exist: 'Email уже используется',
  uncaught_error: l10n('uncaught_error')
};

export function* signUp(action: ReturnType<typeof actions.signUp>) {
  try {
    yield put(actions.setSingUpProcessing(true));
    yield put(actions.setSingUpError(null));

    const result = yield call(authApiActions.signUp, action.payload);

    yield call(TokenService.setToken, result.tokens);

    yield put(actions.setSingUpProcessing(false));

    yield call(navigate, '/');

    yield put(actions.setLoading(true));
    yield delay(TIME_SPLASH_SCREEN);
    yield put(actions.setLoading(false));

  } catch (error) {
    console.error('Error signUp', error);

    yield put(actions.setSingUpProcessing(false));

    const message = SIGN_UP_ERRORS[error?.error];

    if (message) {
      yield put(actions.setSingUpError(message));

      yield delay(2000);

      yield put(actions.setSingUpError(null));
    }
  }
}
