import React, {useRef} from 'react';
import style from './style.less';
import {Button, FormInput} from 'shards-react';

interface IProps {
  onClick: (email: string, password: string) => void;
  toSignUp: () => void;
}

export default function LoginComponent({onClick, toSignUp}: IProps) {
  const inputEmail = useRef<HTMLInputElement>();
  const inputPassword = useRef<HTMLInputElement>();

  const signIn = () => {
    onClick(inputEmail.current.value, inputPassword.current.value);
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <h2>Вход</h2>
        <div className={style.form}>
          <div>Email</div>
          <FormInput innerRef={inputEmail} size='sm' defaultValue={'batalov@mail.ru'}/>
          <div>Пароль</div>
          <FormInput innerRef={inputPassword} size='sm' defaultValue={'batalov'}/>
        </div>
        <div>
          <Button onClick={signIn}>Enter</Button>
          <Button onClick={toSignUp}>SignUp</Button>
        </div>
      </div>
    </div>
  );
}
