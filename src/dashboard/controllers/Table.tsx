import React, {FC, useState, useEffect} from 'react';
import Api from 'src/core/scripts/api';
import {TableMessagesComponent} from 'src/dashboard/components/Table';
import useLongLoading from 'src/core/hooks/useLongLoading';
import {useWidgetName} from 'src/widgets/hooks/useWidgetName';

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

  return (
    <TableMessagesComponent
      messages={messages}
      isLoading={isLoading}
      getWidgetName={getWidgetName}
    />
  );
};
