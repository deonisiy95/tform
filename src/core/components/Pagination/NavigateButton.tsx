import React, {FC} from 'react';
import cn from 'classnames';
import Icon from 'UI/Icon';
import style from './style.less';

interface IProps {
  onClick: VoidFunction;
  disabled?: boolean;
  type: 'next' | 'prev';
}

export const NavigateButton: FC<IProps> = ({onClick, disabled, type}) => {
  return (
    <li
      className={cn(style.button, type === 'next' ? style.nextPage : style.prevPage, {
        [style.disabled]: disabled
      })}
      onClick={disabled ? undefined : onClick}
    >
      <Icon type={type === 'next' ? 'arrow-right' : 'arrow-left'} />
    </li>
  );
};
