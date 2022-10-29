import React, {FC, useCallback} from 'react';
import style from './style.less';
import Icon from 'UI/Icon';
import {TTypeControl} from 'src/form_builder/@types/formBuilder';

interface IProps {
  type: TTypeControl;
  title: string;
  onClick: (type: TTypeControl) => void;
}

export const MenuItem: FC<IProps> = ({type, title, onClick}: IProps) => {
  const clickHandler = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClick(type);
  }, [type, onClick]);

  return (
    <div className={style.item} onClick={clickHandler}>
      <span>{title}</span>
      <Icon type={'plus'} />
    </div>
  );
};
