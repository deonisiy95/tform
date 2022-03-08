import React, {useCallback} from 'react';
import SignUpComponent from 'src/auth/components/SignUp';
import useDispatcher from 'src/core/hooks/useDispatcher';
import authActions from 'src/auth/actions';
import {ISignUpData} from 'src/auth/@types';

export default function SignUp() {
  const signUp = useDispatcher(authActions.signUp);
  const onSignUp = useCallback((data: ISignUpData) => {
    signUp(data);
  }, [signUp]);

  return <SignUpComponent onClick={onSignUp} />;
}
