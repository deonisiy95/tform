import React from 'react';
import style from './style.less';
import EmptyBox from 'src/app/components/EmptyBox';
import {IWidget} from 'src/widgets/@types';
import Card from 'src/widgets/components/Card';

interface IProps {
  widgets: Array<IWidget>;
  loading: boolean;
  onSettings: (id: string) => void;
}

export default function Widgets({widgets, loading, onSettings}: IProps) {
  return (
    <div className={style.container}>
      {!widgets || widgets.length === 0 ? (
        <EmptyBox
          page='widgets'
          text='Вы еще не добавили виджет'
          buttonText={'Добавить новый виджет'}
          buttonHandler={() => {}}
          loading={loading}
        />
      ) : (
        <>
          <div className={style.promo}>
            <div className={style.promoText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque fuga illum
              magni optio quod repellat sit, totam. Aperiam autem esse eveniet nostrum quas quos
              ullam? Non possimus quis vero.
            </div>
            <div className={style.promoImage} />
          </div>
          <div className={style.subtitle}>Подключенные виджеты</div>
          {widgets.map(item => (
            <Card key={item.widgetId} widget={item} onClick={() => onSettings(item.widgetId)} />
          ))}
        </>
      )}
    </div>
  );
}
