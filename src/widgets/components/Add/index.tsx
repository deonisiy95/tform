import React, {PropsWithChildren} from 'react';
import style from './style.less';
import StepsProgress from 'UI/StepsProgress';
import Button from 'UI/Button';
import cn from 'classnames';

interface IProps {
  step: number;
  onNext: () => void;
  onPrev: () => void;
  showPrevButton: boolean;
  disableNext: boolean;
}

export default function AddWidgetComponent({
  children,
  onNext,
  onPrev,
  showPrevButton,
  step,
  disableNext
}: PropsWithChildren<IProps>) {
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
          <div className={cn(style.image, step < 2 ? style.imageCreate : style.imageStart)} />
        </div>
      </div>
      <div className={style.controls}>
        {showPrevButton ? (
          <Button color={'light'} onClick={onPrev} noFull={true}>
            {l10n('back')}
          </Button>
        ) : null}
        <Button color={'primary'} onClick={onNext} noFull={true} disabled={disableNext}>
          {l10n('continue')}
        </Button>
      </div>
    </>
  );
}
