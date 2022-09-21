import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';
import Icon from 'UI/Icon';

interface IProps {
  isActive: boolean;
  onClick: () => void;
  // onUp: () => void;
  // onDown: () => void;
  // onDelete: () => void;
}

export const FormItem: FC<IProps> = ({isActive, onClick, children}) => {
  return (
    <div className={cn(style.container, {[style.active]: isActive})} onClick={onClick}>
      <div className={style.content}>{children}</div>
      <div className={style.menu}>
        <div className={style.button} data-hint={l10n('widget.settings.design.control.up')}>
          <Icon type={'arrow'} className={style.up} />
        </div>
        <div className={style.button} data-hint={l10n('widget.settings.design.control.down')}>
          <Icon type={'arrow'} className={style.down} />
        </div>
        <div className={style.button} data-hint={l10n('remove')}>
          <Icon type={'cross'} className={style.delete} />
        </div>
      </div>
    </div>
  );
};
