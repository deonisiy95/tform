import React, {FC} from 'react';
import style from './style.less';

interface IProps {
  total: number;
}

export const DashboardHeader: FC<IProps> = ({total}) => {
  return (
    <div className={style.header}>
      <h4>{l10n('dashboard.title')}</h4>
      <div className={style.info}>
        <div className={style.stats}>
          <div>{l10n('dashboard.count')}</div>
          <div className={style.total}>{total}</div>
        </div>
      </div>
    </div>
  );
};
