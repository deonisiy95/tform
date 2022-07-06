import React, {useRef} from 'react';
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

  const signIn = () => {
    onClick(inputEmail.current.value, inputPassword.current.value);
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
            defaultValue={'batalov@mail.ru'}
          />
          <Input
            placeholder={'Пароль'}
            ref={inputPassword}
            defaultValue={'batalov'}
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
