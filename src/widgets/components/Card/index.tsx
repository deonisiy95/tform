import React from 'react';
import style from './style.less';
import {IWidget} from 'src/widgets/@types';
import Icon from 'UI/Icon';
import cn from 'classnames';
import Button from 'UI/Button';
import {useAgentsList} from 'src/widgets/hooks/useAgentsList';

interface IProps {
  widget: IWidget;
  onClick: () => void;
  className?: string;
}

export default function Card({widget, onClick, className}: IProps) {
  const agentList = useAgentsList(widget.agents);

  return (
    <div className={cn(style.container, className)}>
      <div className={style.info}>
        <Icon type='telegram' className={style.icon} />
        <div className={style.title}>{widget.name}</div>
        <div className={cn(style.row, style.agents)}>
          <Icon type='users' className={style.rowIcon} />
          <div className={style.rowText}>{agentList}</div>
        </div>
        <div className={style.row}>
          <Icon type='stats' className={style.rowIcon} />
          <div className={style.rowText}>{l10n('widget.stat.notExist')}</div>
        </div>
      </div>
      <Button onClick={onClick} size='sm' color='azure'>
        {l10n('settings')}
      </Button>
    </div>
  );
}
