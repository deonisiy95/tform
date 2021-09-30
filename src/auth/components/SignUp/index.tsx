import React, {useRef} from 'react';
import style from './style.less';
import {Button, FormInput} from 'shards-react';

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

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
    <div className={style.container}>
      <FormInput placeholder={'Name'} innerRef={inputName} size='sm' />
      <FormInput placeholder={'Email'} innerRef={inputEmail} size='sm' />
      <FormInput placeholder={'Pass'} innerRef={inputPassword} size='sm' />
      <Button onClick={signUp}>SignUp</Button>
    </div>
  );
}
