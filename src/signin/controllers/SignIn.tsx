import React from 'react';
import {useSelector} from 'react-redux';
import useDispatcher from 'src/core/hooks/useDispatcher';
import SignInComponent from 'src/signin/components/SignIn';
import actions from 'src/app/actions';
import {TStore} from 'src/store';

export default function SignIn() {
  const setToken = useDispatcher(actions.setToken);
  const token = useSelector((store: TStore) => store.app.token);

  return <SignInComponent onClick={() => setToken('test')} value={token} />;
}
