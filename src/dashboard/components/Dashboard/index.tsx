import React, {useEffect, useState} from 'react';
import style from './style.less';
import {TableMessages} from 'src/dashboard/controllers/Table';
import EmptyBox from 'src/app/components/EmptyBox';
import useLongLoading from 'src/core/hooks/useLongLoading';
import Api from 'src/core/scripts/api';
import {DashboardHeader} from 'src/dashboard/components/Header';

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const {isLoading, setLoading} = useLongLoading(true);
  const empty = isLoading || messages.length === 0;

  useEffect(() => {
    Api.send<IGetMessagesResponse>('widgets/messages')
      .then(result => setMessages(result.messages ?? []))
      .catch(error => console.log('Error get messages', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={style.dashboard}>
      {empty ? (
        <EmptyBox
          page='dashboard'
          text={l10n('dashboard.empty')}
          buttonText={l10n('widgets.add')}
          buttonHandler={() => {}}
          loading={isLoading}
        />
      ) : (
        <>
          <DashboardHeader total={20} />
          <TableMessages messages={messages} />
        </>
      )}
    </div>
  );
}
