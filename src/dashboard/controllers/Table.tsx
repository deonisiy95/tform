import React, {FC, useCallback} from 'react';
import {TableMessagesComponent} from 'src/dashboard/components/Table';
import {useWidgetName} from 'src/widgets/hooks/useWidgetName';
import {Modal} from 'UI/Modal';
import {MessageDetails} from 'src/dashboard/components/MessageDetails';
import {Pagination} from 'UI/Pagination';

interface IProps {
  page: number;
  messages: IMessage[];
  onClickPage: (page: number) => void;
  pagesCount?: number;
  loading?: boolean;
}

export const TableMessages: FC<IProps> = ({page, messages, pagesCount, loading, onClickPage}) => {
  const getWidgetName = useWidgetName();

  const onClickMessage = useCallback((message: IMessage) => {
    Modal(<MessageDetails message={message} />);
  }, []);

  return (
    <>
      <TableMessagesComponent
        messages={messages}
        getWidgetName={getWidgetName}
        onClickMessage={onClickMessage}
        loading={loading}
      />
      <Pagination page={page} count={pagesCount} onChange={onClickPage} />
    </>
  );
};
