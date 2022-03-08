import React, {useRef} from 'react';
import style from './style.less';
import {Button, FormInput} from 'shards-react';
import {ISignUpData} from 'src/auth/@types';

interface IProps {
  onClick: (data: ISignUpData) => void;
}

export default function SignUpComponent({onClick}: IProps) {
  const inputName = useRef<HTMLInputElement>();
  const inputEmail = useRef<HTMLInputElement>();
  const inputPassword = useRef<HTMLInputElement>();

  const signUp = () => {
    onClick({
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    });
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <h2>Регистрация</h2>
        <div className={style.form}>
          <FormInput placeholder={'Name'} innerRef={inputName} size='sm' />
          <FormInput placeholder={'Email'} innerRef={inputEmail} size='sm' />
          <FormInput placeholder={'Pass'} innerRef={inputPassword} size='sm' />
        </div>
        <Button onClick={signUp}>SignUp</Button>
      </div>
    </div>
  );
}
