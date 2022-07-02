import React from 'react';
import Button from 'UI/Button';
import style from './style.less';
import cn from 'classnames';
import Loader from 'UI/Loader';

interface IProps {
  page: 'dashboard' | 'widgets';
  text: string;
  buttonText: string;
  buttonHandler: () => void;
  loading?: boolean;
}

export default function EmptyBox({page, text, buttonText, buttonHandler, loading}: IProps) {
  return (
    <div className={style.container}>
      <div className={cn(style.image, style[page])} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={style.text}>{text}</div>
          <Button onClick={buttonHandler} size='sm' color='light' rounded={true}>
            {buttonText}
          </Button>
        </>
      )}
    </div>
  );
}
