import React, {useCallback} from 'react';
import useDispatcher from 'src/core/hooks/useDispatcher';
import LoginComponent from 'src/auth/components/Login';
import actions from 'src/app/actions';
import {navigate} from 'src/core/scripts/navigation';

export default function Login() {
  const signIn = useDispatcher(actions.signIn);
  const toSignUp = () => {
    navigate('/signup');
  };

  const onEnter = useCallback((email: string, password: string) => {
    signIn(email, password);
  }, [signIn]);

  return <LoginComponent onClick={onEnter} toSignUp={toSignUp} />;
}
