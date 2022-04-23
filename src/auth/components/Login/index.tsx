import React, {useRef} from 'react';
import style from './style.less';
import {FormInput} from 'shards-react';
import Link from 'src/core/components/Link';
import Button from 'src/core/components/Button';

interface IProps {
  error?: string;
  processing?: boolean;
  onClick: (email: string, password: string) => void;
  toSignUp: () => void;
}

export default function LoginComponent({onClick, toSignUp, processing}: IProps) {
  const inputEmail = useRef<HTMLInputElement>();
  const inputPassword = useRef<HTMLInputElement>();

  const signIn = () => {
    onClick(inputEmail.current.value, inputPassword.current.value);
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <h3>Вход</h3>
        <div className={style.form}>
          <FormInput
            placeholder={'Email'}
            innerRef={inputEmail}
            size='sm'
            defaultValue={'batalov@mail.ru'}
          />
          <FormInput
            placeholder={'Пароль'}
            innerRef={inputPassword}
            size='sm'
            defaultValue={'batalov'}
          />
        </div>
        <Button className={style.button} onClick={signIn} isLoad={processing}>
          Enter
        </Button>
        <div>
          <span className={style.signupText}>Еще не зарегистрированы?</span>
          <Link onClick={toSignUp} size={'md'}>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}
