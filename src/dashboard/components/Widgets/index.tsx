import React, {FC} from 'react';
import {TotalWidget} from 'src/dashboard/components/Widgets/Total';
import style from './style.less';
import {UpdateWidget} from 'src/dashboard/components/Widgets/Update';

interface IProps {
  total: number;
  page: number;
  onUpdateMessageList: () => void;
}

export const Widgets: FC<IProps> = ({total, page, onUpdateMessageList}) => {
  return (
    <div className={style.widgets}>
      <TotalWidget total={total} />
      <UpdateWidget page={page} onUpdate={onUpdateMessageList} />
    </div>
  );
};
