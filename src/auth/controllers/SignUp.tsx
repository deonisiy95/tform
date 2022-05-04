import React, {useCallback} from 'react';
import SignUpComponent from 'src/auth/components/SignUp';
import useDispatcher from 'src/core/hooks/useDispatcher';
import authActions from 'src/auth/actions';
import {ISignUpData} from 'src/auth/@types';
import {navigate} from 'src/core/scripts/navigation';
import {useSelector} from 'react-redux';
import {selectSingUpError, selectSingUpProcessing} from 'src/auth/selectors';

export default function SignUp() {
  const signUp = useDispatcher(authActions.signUp);
  const processing = useSelector(selectSingUpProcessing);
  const error = useSelector(selectSingUpError);
  const onSignUp = useCallback(
    (data: ISignUpData) => {
      signUp(data);
    },
    [signUp]
  );
  const toLogin = useCallback(() => {
    navigate('/login');
  }, []);

  return (
    <SignUpComponent toLogin={toLogin} onClick={onSignUp} processing={processing} error={error} />
  );
}
