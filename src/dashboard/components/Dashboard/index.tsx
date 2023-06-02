import React, {useCallback, useEffect, useState} from 'react';
import style from './style.less';
import {TableMessages} from 'src/dashboard/controllers/Table';
import EmptyBox from 'src/app/components/EmptyBox';
import useLongLoading from 'src/core/hooks/useLongLoading';
import {DashboardHeader} from 'src/dashboard/components/Header';
import {Widgets} from 'src/dashboard/components/Widgets';
import {getMessages} from 'src/dashboard/actions/Messages';

const LIMIT_MESSAGE_COUNT = 10;

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const {isLoading, setLoading} = useLongLoading(true);
  const {isLoading: isLoadingMessages, setLoading: setLoadingMessages} = useLongLoading(false, 500);
  const empty = isLoading || messages.length === 0;

  useEffect(() => {
    setLoadingMessages(true);
    getMessages(page * LIMIT_MESSAGE_COUNT - LIMIT_MESSAGE_COUNT, LIMIT_MESSAGE_COUNT)
      .then((result: IGetMessagesResponse) => {
        setMessages(result.messages ?? []);
        setTotal(result.total ?? 0);
      })
      .finally(() => {
        setLoading(false);
        setLoadingMessages(false);
      });
  }, [page]);

  const onClickPage = useCallback((page: number) => {
    setPage(page);
  }, []);

  const onUpdateMessageList = useCallback(() => {
    setPage(1);
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
        <div className={style.content}>
          <DashboardHeader />
          <Widgets page={page} total={total} onUpdateMessageList={onUpdateMessageList} />
          <TableMessages
            messages={messages}
            page={page}
            onClickPage={onClickPage}
            pagesCount={Math.ceil(total / LIMIT_MESSAGE_COUNT)}
            loading={isLoadingMessages}
          />
        </div>
      )}
    </div>
  );
}
