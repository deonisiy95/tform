import React, {FC} from 'react';
import style from './style.less';
import Icon from 'UI/Icon';
import cn from 'classnames';

interface IProps {
  onUp: VoidFunction;
  onDown: VoidFunction;
  onDelete: VoidFunction;
  disabled?: boolean;
}

export const ActionsButtons: FC<IProps> = ({onUp, onDown, onDelete, disabled}: IProps) => {
  return (
    <div className={cn(style.menu, {[style.disabled]: disabled})}>
      <div
        className={style.button}
        data-hint={l10n('widget.settings.design.control.up')}
        onClick={onUp}
      >
        <Icon type={'arrow-up'} />
      </div>
      <div
        className={style.button}
        data-hint={l10n('widget.settings.design.control.down')}
        onClick={onDown}
      >
        <Icon type={'arrow-down'}/>
      </div>
      <div className={style.button} data-hint={l10n('remove')} onClick={onDelete}>
        <Icon type={'cross'} className={style.delete} />
      </div>
    </div>
  );
};
