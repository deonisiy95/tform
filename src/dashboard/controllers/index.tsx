import React from 'react';
import Api from 'src/core/scripts/api';
import {IToken} from 'src/auth/@types';

export default function DashBoard() {
  const onClick = () => {
    Api.send<IToken>('orders').then(result => {
      console.log(result);
    });
  };
  return <div onClick={onClick}>DASHBOARD</div>;
}
