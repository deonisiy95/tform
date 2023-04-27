import React, {FC} from 'react';
import style from './style.less';
import {TableRow} from 'src/dashboard/components/Table/Item';
import EmptyBox from 'src/app/components/EmptyBox';
import {getTextMessage} from 'src/dashboard/utils/getTextMessage';

interface IProps {
  isLoading: boolean;
  messages: IMessage[];
  getWidgetName: (id: string) => string;
}

export const TableMessagesComponent: FC<IProps> = ({messages, isLoading, getWidgetName}) => {
  if (isLoading || messages.length === 0) {
    return (
      <EmptyBox
        page='dashboard'
        text={l10n('dashboard.empty')}
        buttonText={l10n('widgets.add')}
        buttonHandler={() => {}}
        loading={isLoading}
      />
    );
  }

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
          message={getTextMessage(message)}
          widgetName={getWidgetName(message.widgetId)}
          createdAt={message.createdAt}
        />
      ))}
    </div>
  );
};
