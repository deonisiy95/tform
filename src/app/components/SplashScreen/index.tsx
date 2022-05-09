import React from 'react';
import style from './style.less';
import Loader from 'UI/Loader';

export default function SplashScreen() {
  return (
    <div className={style.container}>
      <div className={style.image} />
      <Loader />
    </div>
  );
}
