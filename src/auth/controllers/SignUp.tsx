import React from 'react';
import SignUpComponent, {ISignUpData} from 'src/auth/components/SignUp';
import Api from 'src/core/scripts/api';
import useDispatcher from 'src/core/hooks/useDispatcher';
import authActions from 'src/auth/actions';
import {IToken} from 'src/auth/@types';

export default function SignUp() {
  const setToken = useDispatcher(authActions.setToken);

  const signUp = (data: ISignUpData) => {
    Api.send<IToken>('signup', 'POST', data, false).then(result => {
      console.warn(result);
      setToken({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
      });
    });
  };

  return <SignUpComponent onClick={signUp} />;
}
