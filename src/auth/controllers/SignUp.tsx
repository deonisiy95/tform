import React from 'react';
import SignUpComponent, {ISignUpData} from 'src/auth/components/SignUp';
import Api from 'src/core/scripts/api';
import useDispatcher from 'src/core/hooks/useDispatcher';
import actions from 'src/app/actions';
import {IToken} from 'src/app/@types';

export default function SignUp() {
  const setToken = useDispatcher(actions.setToken);

  const signUp = (data: ISignUpData) => {
    Api.send<IToken>('signup', 'POST', data).then(result => {
      console.warn(result);
      setToken({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken
      });
    });
  };

  return <SignUpComponent onClick={signUp} />;
}
