import React, {FC, useState, useEffect, useCallback} from 'react';
import Api from 'src/core/scripts/api';
import {TableMessagesComponent} from 'src/dashboard/components/Table';
import useLongLoading from 'src/core/hooks/useLongLoading';
import {useWidgetName} from 'src/widgets/hooks/useWidgetName';
import {Modal} from 'UI/Modal';
import {MessageDetails} from 'src/dashboard/components/MessageDetails';

interface IProps {}

export const TableMessages: FC<IProps> = () => {
  const [messages, setMessages] = useState([]);
  const {isLoading, setLoading} = useLongLoading(true);

  useEffect(() => {
    Api.send<IGetMessagesResponse>('widgets/messages')
      .then(result => setMessages(result.messages ?? []))
      .catch(error => console.log('Error get messages', error))
      .finally(() => setLoading(false));
  }, []);

  const getWidgetName = useWidgetName();

  const onClickMessage = useCallback((message: IMessage) => {
    Modal(<MessageDetails message={message} />);
  }, []);

  return (
    <TableMessagesComponent
      messages={messages}
      isLoading={isLoading}
      getWidgetName={getWidgetName}
      onClickMessage={onClickMessage}
    />
  );
};
