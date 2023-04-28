import React, {FC, Fragment} from 'react';
import moment from 'moment';
import style from './style.less';

interface IProps {
  message: IMessage;
}

export const MessageDetails: FC<IProps> = ({message}) => {
  const date = moment(message.createdAt);

  return (
    <div className={style.messageDetails}>
      <h3>{l10n('message.details.title')}</h3>
      <div className={style.date}>{date.format('DD MMMM YYYY HH:mm')}</div>
      <div className={style.messageInfo}>
        {message?.data?.map(item => (
          <Fragment key={item._id}>
            <div>{item.key}</div>
            <div>{item.value}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
