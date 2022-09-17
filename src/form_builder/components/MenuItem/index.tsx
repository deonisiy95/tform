import React, {FC, useCallback} from 'react';
import style from './style.less';
import Icon from 'UI/Icon';

interface IProps {
  type: string;
  title: string;
  onClick: (type: string) => void;
}

export const MenuItem: FC<IProps> = ({type, title, onClick}: IProps) => {
  const clickHandler = useCallback(() => onClick(type), [type, onClick]);

  return (
    <div className={style.item} onClick={clickHandler}>
      <span>{title}</span>
      <Icon type={'plus'} />
    </div>
  );
};
