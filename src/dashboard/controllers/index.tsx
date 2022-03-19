import React from 'react';
import Api from 'src/core/scripts/api';
import {IToken} from 'src/auth/@types';
import authActions from 'src/auth/actions';
import useDispatcher from 'src/core/hooks/useDispatcher';

export default function DashBoard() {
  const onClick = () => {
    Api.send<IToken>('orders').then(result => {
      console.log(result);
    });
  };

  const onLogout = useDispatcher(authActions.logout);
  return <div>
    <div onClick={onClick}>DASHBOARD</div>
    <div onClick={onLogout}>Logout</div>
  </div>;
}
