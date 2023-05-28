import React, {FC, useCallback} from 'react';
import {TableRow} from 'src/dashboard/components/Table/Item';
import {getShortTextMessage} from 'src/dashboard/utils/getTextMessage';
import style from './style.less';
import cn from 'classnames';
import Loader from 'UI/Loader';

interface IProps {
  messages: IMessage[];
  onClickMessage: (message: IMessage) => void;
  getWidgetName: (id: string) => string;
  loading?: boolean;
}

export const TableMessagesComponent: FC<IProps> = ({
  messages,
  getWidgetName,
  onClickMessage,
  loading
}) => {
  const onClick = useCallback(
    (message: IMessage) => () => {
      onClickMessage(message);
    },
    [onClickMessage]
  );

  return (
    <div className={cn(style.table, {[style.loading]: loading})}>
      {loading ? <Loader className={style.loader}/> : null}
      <div className={style.header}>
        <div>{l10n('date')}</div>
        <div>{l10n('message.table.header.info')}</div>
        <div>{l10n('message.table.header.widget')}</div>
      </div>
      {messages.map(message => (
        <TableRow
          key={message.createdAt}
          message={getShortTextMessage(message)}
          widgetName={getWidgetName(message.widgetId)}
          createdAt={message.createdAt}
          onClick={onClick(message)}
        />
      ))}
    </div>
  );
};
