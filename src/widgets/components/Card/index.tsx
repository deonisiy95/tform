import React from 'react';
import style from './style.less';
import {IWidget} from 'src/widgets/@types';
import Icon from 'UI/Icon';
import cn from 'classnames';
import Button from 'UI/Button';

interface IProps {
  widget: IWidget;
}

export default function Card({widget}: IProps) {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <Icon type='telegram' className={style.icon}/>
        <div className={style.title}>{widget.name}</div>
        <div className={cn(style.row, style.agents)}>
          <Icon type='users' className={style.rowIcon}/>
          <div className={style.rowText}>Нет подключенных агентов</div>
        </div>
        <div className={style.row}>
          <Icon type='stats' className={style.rowIcon}/>
          <div className={style.rowText}>Нет подключенных агентов</div>
        </div>
      </div>
      <Button onClick={() => {}} size='sm' color='azure' rounded={true}>
        Настройки
      </Button>
    </div>
  );
}
