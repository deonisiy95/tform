import cn from 'classnames';
import React, {FC, useState, useRef, useMemo, useLayoutEffect} from 'react';

import style from './style.less';

interface IProps {
  isOpen: boolean;
  caption: React.ReactNode | (({isOpen}: {isOpen: boolean}) => React.ReactNode);
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  autoClose?: boolean;
  fullWidth?: boolean;
  name?: string;
  'data-testid'?: string;
}

export const ControlledDropdown: FC<IProps> = ({
  className,
  contentClassName,
  children,
  caption,
  isOpen,
  onClick,
  name,
  autoClose,
  fullWidth = true,
  'data-testid': testId
}) => {
  const [topPosition, setTopPosition] = useState(false);
  const captionRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!dropdownRef?.current || !isOpen) {
      return;
    }

    const rect = dropdownRef.current.getBoundingClientRect();

    setTopPosition(rect.bottom > window.innerHeight);
  }, [isOpen]);

  const captionToggle = useMemo(() => {
    if (typeof caption === 'function') {
      return caption({isOpen});
    }

    return caption;
  }, [caption, isOpen]);

  const onClickContent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!autoClose) {
      event.stopPropagation();
    }
  };

  return (
    <div
      className={cn(style.dropdownContainer, className)}
      data-name={name}
      data-testid={testId ?? ''}
    >
      <div
        ref={captionRef}
        className={cn(style.caption, 'dropdown-caption')}
        onClick={onClick}
        data-testid={testId ? `${testId}-caption` : ''}
      >
        {captionToggle}
      </div>
      {isOpen ? (
        <div
          ref={dropdownRef}
          className={cn(
            style.dropdown,
            contentClassName,
            {
              [style.top]: topPosition,
              [style.fullWidth]: fullWidth
            },
            'dropdown-content'
          )}
          onClick={onClickContent}
          data-testid={testId ? `${testId}-dropdown` : ''}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};
