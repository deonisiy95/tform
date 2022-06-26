import React from 'react';
import style from './style.less';
import EmptyBox from 'src/app/components/EmptyBox';

export default function Widgets() {
  return (
    <div className={style.container}>
      <EmptyBox
        page='widgets'
        text='Вы еще не добавили виджет'
        buttonText={'Добавить новый виджет'}
        buttonHandler={() => {}}
      />
    </div>
  );
}
