import React, {FC} from 'react';
import Icon from 'UI/Icon';
import style from './style.less';

interface IProps {
  total: number;
}

export const TotalWidget: FC<IProps> = ({total}) => {
  return (
    <div className={style.widget}>
      <Icon type={'incoming'} className={style.widgetIcon} />
      <div className={style.widgetText}>{l10n('dashboard.total')}</div>
      <div className={style.widgetValue}>{total}</div>
    </div>
  );
};
