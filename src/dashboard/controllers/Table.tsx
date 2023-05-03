import React, {FC, useCallback} from 'react';
import {TableMessagesComponent} from 'src/dashboard/components/Table';
import {useWidgetName} from 'src/widgets/hooks/useWidgetName';
import {Modal} from 'UI/Modal';
import {MessageDetails} from 'src/dashboard/components/MessageDetails';

interface IProps {
  messages: IMessage[];
}

export const TableMessages: FC<IProps> = ({messages}) => {
  const getWidgetName = useWidgetName();

  const onClickMessage = useCallback((message: IMessage) => {
    Modal(<MessageDetails message={message} />);
  }, []);

  return (
    <TableMessagesComponent
      messages={messages}
      getWidgetName={getWidgetName}
      onClickMessage={onClickMessage}
    />
  );
};
