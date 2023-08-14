import React, {FC} from 'react';
import moment from 'moment';
import style from './style.less';

interface IProps {
  createdAt: number;
  message: string;
  widgetName: string;
  onClick: () => void;
}

export const TableRow: FC<IProps> = ({message, createdAt, widgetName, onClick}) => {
  const date = moment(createdAt);

  return (
    <div className={style.row} onClick={onClick}>
      <div className={style.date}>
        <span>{date.format('DD MMMM YYYY ')}</span>
        <span className={style.time}>{date.format('HH:mm')}</span>
      </div>
      <div className={style.info}>{message}</div>
      <div className={style.widget}>{widgetName}</div>
    </div>
  );
};
