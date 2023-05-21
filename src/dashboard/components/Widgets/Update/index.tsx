import React, {FC} from 'react';
import Icon from 'UI/Icon';
import style from './style.less';
import Button from 'UI/Button';

interface IProps {}

export const UpdateWidget: FC<IProps> = () => {
  return (
    <div className={style.widget}>
      <Icon type={'time'} className={style.widgetIcon} />
      <div className={style.widgetText}>{l10n('dashboard.update.text')}</div>
      <Button onClick={() => {}} size={'sm'}>
        {l10n('dashboard.update.button')}
      </Button>
    </div>
  );
};
