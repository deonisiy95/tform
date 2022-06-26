import React from 'react';
import Button from 'UI/Button';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  page: 'dashboard' | 'widgets';
  text: string;
  buttonText: string;
  buttonHandler: () => void;
}

export default function EmptyBox({page, text, buttonText, buttonHandler}: IProps) {
  return (
    <div className={style.container}>
      <div className={cn(style.image, style[page])} />
      <div className={style.text}>{text}</div>
      <Button onClick={buttonHandler} size='sm' color='light' rounded={true}>
        {buttonText}
      </Button>
    </div>
  );
}
