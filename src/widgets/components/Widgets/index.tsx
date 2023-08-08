import React from 'react';
import style from './style.less';
import EmptyBox from 'src/app/components/EmptyBox';
import {IWidget} from 'src/widgets/@types';
import Card from 'src/widgets/components/Card';
import Button from 'UI/Button';

interface IProps {
  widgets: Array<IWidget>;
  loading: boolean;
  onSettings: (id: string) => void;
  onSimulate: (id: string) => void;
  onAdd: () => void;
}

export default function Widgets({widgets, loading, onSettings, onSimulate, onAdd}: IProps) {
  return (
    <>
      {!widgets || widgets.length === 0 ? (
        <EmptyBox
          page='widgets'
          text={l10n('widgets.empty')}
          buttonText={l10n('widgets.add')}
          buttonHandler={onAdd}
          loading={loading}
        />
      ) : (
        <>
          <div className={style.promo}>
            <div className={style.promoText}>{l10n('widgets.promo')}</div>
            <div className={style.promoImage} />
          </div>
          <div className={style.subtitle}>
            <span>{l10n('widgets.connected')}</span>
            <Button onClick={onAdd} size={'sm'} color={'primary'}>
              {`+ ${l10n('widgets.add')}`}
            </Button>
          </div>
          <div className={style.list}>
            {widgets.map(item => (
              <Card
                key={item.widgetId}
                widget={item}
                onSettings={() => onSettings(item.widgetId)}
                onSimulate={() => onSimulate(item.widgetId)}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
