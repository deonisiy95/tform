import cn from 'classnames';
import React, {FC} from 'react';

import Icon from 'UI/Icon';

import style from './Control.less';

interface IProps {
  isOpen: boolean;
  label: string;
  isDisable?: boolean;
  isError?: boolean;
  'data-testid'?: string;
}

export const SelectControl: FC<IProps> = ({
  label,
  isOpen,
  isDisable,
  isError,
  'data-testid': testId
}) => {
  return (
    <div
      className={cn(style.selectControl, {
        [style.disable]: isDisable,
        [style.error]: isError,
        [style.open]: isOpen
      })}
      data-testid={testId}
    >
      <div className={style.label}>{label}</div>
      <Icon type={isOpen ? 'arrow-up' : 'arrow-down'} className={style.icon} />
    </div>
  );
};
