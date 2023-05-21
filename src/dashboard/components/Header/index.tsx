import React, {FC} from 'react';
import style from './style.less';

export const DashboardHeader: FC = () => {
  return (
    <div className={style.header}>
      <h4>{l10n('dashboard.title')}</h4>
    </div>
  );
};
