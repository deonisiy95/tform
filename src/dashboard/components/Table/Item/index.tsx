import React, {FC} from 'react';
import moment from 'moment';
import style from './style.less';

interface IProps {
  createdAt: number;
  message: string;
  widgetName: string;
}

export const TableRow: FC<IProps> = ({message, createdAt, widgetName}) => {
  const date = moment(createdAt);

  return <div className={style.row}>
    <div className={style.date}>{date.format('DD MMMM YYYY HH:mm')}</div>
    <div className={style.info}>{message}</div>
    <div className={style.widget}>{widgetName}</div>
  </div>;
};
