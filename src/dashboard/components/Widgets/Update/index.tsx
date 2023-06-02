import React, {FC, useEffect, useRef, useState} from 'react';
import Icon from 'UI/Icon';
import style from './style.less';
import Button from 'UI/Button';
import {useMounted} from 'src/core/hooks/useMounted';
import moment from 'moment';

interface IProps {
  page: number;
  onUpdate?: () => void;
}

export const UpdateWidget: FC<IProps> = ({page, onUpdate}) => {
  const lastUpdateTime = useRef<number>();
  const timer = useRef<TimeoutId>();

  const [lastUpdateText, setLastUpdateText] = useState<string>(
    l10n('dashboard.update.text') + ' ' + moment(Date.now()).fromNow()
  );
  const isMounted = useMounted();

  const updateText = () => {
    setLastUpdateText(
      l10n('dashboard.update.text') + ' ' + moment(lastUpdateTime.current).fromNow()
    );
  };

  const tick = () => {
    timer.current = setTimeout(() => {
      if (isMounted()) {
        updateText();
        tick();
      }
    }, 60000);
  };

  useEffect(() => {
    lastUpdateTime.current = Date.now();
    tick();

    return () => {
      clearTimeout(timer.current);
    };
  }, [page]);

  const updateData = () => {
    onUpdate?.();
    lastUpdateTime.current = Date.now();
    clearTimeout(timer.current);
    updateText();
    tick();
  };

  return (
    <div className={style.widget}>
      <Icon type={'time'} className={style.widgetIcon} />
      <div className={style.widgetText}>{lastUpdateText}</div>
      <Button onClick={updateData} size={'xsm'}>
        {l10n('dashboard.update.button')}
      </Button>
    </div>
  );
};
