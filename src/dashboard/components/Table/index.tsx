import React, {FC, useCallback} from 'react';
import {TableRow} from 'src/dashboard/components/Table/Item';
import {getShortTextMessage} from 'src/dashboard/utils/getTextMessage';
import style from './style.less';

interface IProps {
  messages: IMessage[];
  onClickMessage: (message: IMessage) => void;
  getWidgetName: (id: string) => string;
}

export const TableMessagesComponent: FC<IProps> = ({
  messages,
  getWidgetName,
  onClickMessage
}) => {
  const onClick = useCallback(
    (message: IMessage) => () => {
      onClickMessage(message);
    },
    [onClickMessage]
  );

  return (
    <div className={style.table}>
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
