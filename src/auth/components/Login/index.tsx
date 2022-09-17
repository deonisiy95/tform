import React, {useRef, useState} from 'react';
import style from './style.less';
import Link from 'UI/Link';
import Button from 'UI/Button';
import Input from 'UI/Input';
import cn from 'classnames';

interface IProps {
  error?: string;
  processing?: boolean;
  onClick: (email: string, password: string) => void;
  toSignUp: () => void;
}

export default function LoginComponent({onClick, toSignUp, processing, error}: IProps) {
  const inputEmail = useRef<HTMLInputElement>();
  const inputPassword = useRef<HTMLInputElement>();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

  const signIn = () => {
    if (!checkFields()) {
      return;
    }

    onClick(inputEmail.current.value, inputPassword.current.value);
  };

  const checkFields = (): boolean => {
    let result = true;

    if (!inputEmail.current.value?.trim()) {
      setInvalidEmail(true);
      result = false;
    }

    if (!inputPassword.current.value?.trim()) {
      setInvalidPass(true);
      result = false;
    }

    return result;
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.image} />
        <h3>Вход</h3>
        <div className={style.form}>
          <Input
            placeholder={'Email'}
            ref={inputEmail}
            invalid={invalidEmail}
            type={'email'}
          />
          <Input
            placeholder={'Пароль'}
            ref={inputPassword}
            invalid={invalidPass}
            type={'password'}
          />
        </div>
        {<span className={cn(style.errorContainer, {[style.error]: error})}>{error}</span>}
        <Button className={style.button} onClick={signIn} isLoad={processing}>
          Войти
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
