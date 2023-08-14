import cn from 'classnames';
import React, {FC, useCallback} from 'react';

import {Dropdown} from 'UI/Dropdown';
import {SelectControl} from 'UI/Select/Control';
import {SelectOption} from 'UI/Select/Option';

import style from './Select.less';

export type TOptions = Array<{
  label: string;
  value: string;
}>;

export interface IProps {
  options: TOptions;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  'data-testid'?: string;
}

export const Select: FC<IProps> = ({
  options,
  value,
  onChange,
  className,
  'data-testid': testId
}) => {
  const renderControl = useCallback(
    ({isOpen}: {isOpen: boolean}) => {
      const selected = value ? options?.find(item => item.value === value) : options?.[0];

      return (
        <SelectControl
          isOpen={isOpen}
          label={selected?.label ?? ''}
          data-testid={testId ? `${testId}-caption` : ''}
        />
      );
    },
    [options, testId, value]
  );

  const onSelect = useCallback(
    (value: string) => () => {
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <Dropdown className={className} caption={renderControl}>
      <ul className={cn(style.options, 'scroll')} data-testid={testId ? `${testId}-options` : ''}>
        {options?.map(option => (
          <SelectOption key={option.value} onClick={onSelect(option.value)} label={option.label} />
        ))}
      </ul>
    </Dropdown>
  );
};
