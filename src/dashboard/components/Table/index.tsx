import React, {FC} from 'react';
import style from './style.less';
import {TableRow} from 'src/dashboard/components/Table/Item';
import EmptyBox from 'src/app/components/EmptyBox';

interface IProps {
  isLoading: boolean;
  messages: IMessage[];
}

export const TableMessagesComponent: FC<IProps> = ({messages, isLoading}) => {
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
      {messages.map(message => (
        <TableRow key={message.createdAt} message={message} />
      ))}
    </div>
  );
};
