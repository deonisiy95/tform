import React, {FC} from 'react';
import cn from 'classnames';

import style from './style.less';

interface IProps {
  elements: Array<{
    value: string;
    element: React.ReactNode;
  }>;
  value: string;
  onChange: (value: string) => void;
}

export const RadioElements: FC<IProps> = ({elements, value, onChange}) => {
  const changeHandler = (value: string) => () => {
    onChange(value);
  };

  return (
    <div className={style.list}>
      {elements.map(item => (
        <div
          className={cn(style.item, {[style.active]: value === item.value})}
          key={item.value}
          onClick={changeHandler(item.value)}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
};
