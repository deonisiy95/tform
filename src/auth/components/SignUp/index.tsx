import React, {useRef, useState} from 'react';
import style from 'src/auth/components/Login/style.less';
import componentStyle from './style.less';
import {ISignUpData} from 'src/auth/@types';
import Link from 'src/core/components/Link';
import Button from 'src/core/components/Button';
import Input from 'src/core/components/Input';
import cn from 'classnames';
import {Validation} from 'src/core/utils/validation';

interface IProps {
  error?: string;
  processing?: boolean;
  onClick: (data: ISignUpData) => void;
  toLogin: () => void;
}

export default function SignUpComponent({onClick, toLogin, error, processing}: IProps) {
  const inputName = useRef<HTMLInputElement>();
  const inputEmail = useRef<HTMLInputElement>();
  const inputPassword = useRef<HTMLInputElement>();
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);

  const isValidFields = (): boolean => {
    const nameError = Validation.isEmpty(inputName.current.value);
    const emailError =
      Validation.isEmpty(inputEmail.current.value) || !Validation.isEmail(inputEmail.current.value);
    const passwordError = Validation.isEmpty(inputPassword.current.value);

    setInvalidName(nameError);
    setInvalidEmail(emailError);
    setInvalidPass(passwordError);

    return !nameError && !emailError && !passwordError;
  };

  const signUp = () => {
    if (!isValidFields()) {
      return;
    }

    onClick({
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    });
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={componentStyle.image} />
        <h3>Регистрация</h3>
        <div className={style.form}>
          <Input placeholder={'Имя'} ref={inputName} invalid={invalidName} />
          <Input placeholder={'Email'} ref={inputEmail} invalid={invalidEmail} />
          <Input placeholder={'Пароль'} ref={inputPassword} invalid={invalidPass} />
        </div>
        {<span className={cn(style.errorContainer, {[style.error]: error})}>{error}</span>}
        <Button className={style.button} onClick={signUp} isLoad={processing}>
          Зарегистрироваться
        </Button>
        <div className={style.signupLink}>
          <span className={style.signupText}>Уже есть аккаунт?</span>
          <Link onClick={toLogin} size={'md'}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}
