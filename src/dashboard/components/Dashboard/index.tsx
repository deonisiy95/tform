import React from 'react';
import style from './style.less';
import {TableMessages} from 'src/dashboard/controllers/Table';

export default function Dashboard() {
  return (
    <div className={style.dashboard}>
      <TableMessages />
    </div>
  );
}
