import React, {PropsWithChildren} from 'react';
import style from './style.less';
import StepsProgress from 'UI/StepsProgress';

interface IProps {}

export default function AddWidgetComponent({children}: PropsWithChildren<IProps>) {
  return (
    <div className={style.container}>
      <div className={style.title}>{l10n('widgets.add.title')}</div>
      <StepsProgress list={['arrow', 'close', 'out', 'stats']} active={2}/>
      {children}
    </div>
  );
}
