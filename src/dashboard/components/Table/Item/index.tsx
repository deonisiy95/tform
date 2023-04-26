import React, {FC} from 'react';
import style from './style.less';

interface IProps {
  message: IMessage;
}

export const TableRow: FC<IProps> = ({message}) => {
  return <div className={style.row}>{message.createdAt}</div>;
};
