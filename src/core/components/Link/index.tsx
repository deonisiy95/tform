import React from 'react';
import cn from 'classnames';
import style from './style.less';

interface IProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
  underline?: boolean;
  disabled?: boolean;
}

const Link: React.FC<IProps> = ({
  children,
  size = 'sm',
  onClick,
  underline,
  disabled,
}): JSX.Element => {
  const className = cn(style.link, style[`size-${size}`], {
    [style.underline]: underline,
    [style.disabled]: disabled
  });

  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
};

export default Link;
