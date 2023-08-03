import {call, put, delay} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import {authApiActions} from 'src/auth/actions/api';
import {navigate} from 'src/core/scripts/navigation';

const SIGN_UP_ERRORS = {
  user_exist: 'Email уже используется',
  uncaught_error: l10n('uncaught_error')
};

export function* signUp(action: ReturnType<typeof actions.signUp>) {
  try {
    yield put(actions.setSingUpProcessing(true));
    yield put(actions.setSingUpError(null));

    const result = yield call(authApiActions.signUp, action.payload);

    yield put(
      actions.setToken({
        accessToken: result.tokens?.accessToken,
        refreshToken: result.tokens?.refreshToken
      })
    );

    yield put(actions.setSingUpProcessing(false));

    yield call(navigate, '/');
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
