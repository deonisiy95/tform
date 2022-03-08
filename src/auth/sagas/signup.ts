import {call, put} from 'redux-saga/effects';
import actions from 'src/auth/actions';
import {authApiActions} from 'src/auth/actions/api';
import {navigate} from 'src/core/scripts/navigation';

export function* signUp(action: ReturnType<typeof actions.signUp>) {
  try {
    const result = yield call(authApiActions.signUp, action.payload);

    yield put(
      actions.setToken({
        accessToken: result.tokens?.accessToken,
        refreshToken: result.tokens?.refreshToken
      })
    );

    yield call(navigate, '/');
  } catch (error) {
    console.error('Error signUp', error);
  }
}
