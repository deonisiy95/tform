import React, {PropsWithChildren} from 'react';
import style from './style.less';
import StepsProgress from 'UI/StepsProgress';
import Button from 'UI/Button';

interface IProps {
  step: number;
  onNext: () => void;
}

export default function AddWidgetComponent({children, onNext, step}: PropsWithChildren<IProps>) {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>{l10n('widgets.add.title')}</div>
        <div className={style.content}>
          <div className={style.info}>
            <div className={style.subtitle}>{l10n('widgets.add.one.subtitle')}</div>
            <StepsProgress
              list={['create', 'copy', 'message', 'rocket']}
              active={step}
              className={style.progress}
            />
            {children}
          </div>
          <div className={style.image} />
        </div>
      </div>
      <div className={style.controls}>
        <Button color={'primary'} onClick={onNext} noFull={true}>
          {l10n('continue')}
        </Button>
      </div>
    </>
  );
}
