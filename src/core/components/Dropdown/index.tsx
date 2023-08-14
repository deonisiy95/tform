import React, {FC, useState, useCallback} from 'react';

import {ControlledDropdown} from 'UI/Dropdown/ControlledDrowdown';
import {useDropdownOutClick} from 'UI/Dropdown/lib/useDropdownOutClick';

interface IProps {
  caption: React.ReactNode | (({isOpen}: {isOpen: boolean}) => React.ReactNode);
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  autoClose?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  onOpen?: () => void;
  'data-testid'?: string;
}

export const Dropdown: FC<IProps> = ({
  className,
  contentClassName,
  children,
  caption,
  isDisabled,
  autoClose = true,
  fullWidth = true,
  onOpen,
  'data-testid': testId
}) => {
  const [isOpen, setOpen] = useState(false);

  const onOutClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useDropdownOutClick(isOpen, onOutClick);

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    event.stopPropagation();

    setOpen(!isOpen);

    if (!isOpen && onOpen) {
      onOpen();
    }
  };

  return (
    <ControlledDropdown
      isOpen={isOpen}
      caption={caption}
      onClick={onClick}
      className={className}
      contentClassName={contentClassName}
      autoClose={autoClose}
      fullWidth={fullWidth}
      data-testid={testId}
    >
      {children}
    </ControlledDropdown>
  );
};
