import React, {FC} from 'react';
import style from './style.less';
import Icon from 'UI/Icon';

interface IProps {
  onUp: VoidFunction;
  onDown: VoidFunction;
}

export const ActionsButtons: FC<IProps> = ({onUp, onDown}: IProps) => {
  return (
    <div className={style.menu}>
      <div
        className={style.button}
        data-hint={l10n('widget.settings.design.control.up')}
        onClick={onUp}
      >
        <Icon type={'arrow'} className={style.up} />
      </div>
      <div
        className={style.button}
        data-hint={l10n('widget.settings.design.control.down')}
        onClick={onDown}
      >
        <Icon type={'arrow'} className={style.down} />
      </div>
      <div className={style.button} data-hint={l10n('remove')}>
        <Icon type={'cross'} className={style.delete} />
      </div>
    </div>
  );
};
