import React, {FC} from 'react';
import style from './style.less';
import Button from 'UI/Button';
import useDispatcher from 'src/core/hooks/useDispatcher';
import {appActions} from 'src/app/stores';

export const MobileWarningComponent: FC = () => {
  const setMobileWarning = useDispatcher(appActions.setMobileWarning);
  const turnOnDesctopVersion = () => {
    setMobileWarning(false);
  };

  return (
    <div className={style.warning}>
      <div className={style.illustration} />
      <h2>{l10n('warning.mobileVersion.title')}</h2>
      <p>{l10n('warning.mobileVersion.text')}</p>
      <Button onClick={turnOnDesctopVersion} className={style.button}>
        {l10n('warning.mobileVersion.button')}
      </Button>
    </div>
  );
};
