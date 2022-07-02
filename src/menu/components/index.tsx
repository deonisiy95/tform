import React, {useCallback} from 'react';
import style from './style.less';
import {TSection} from 'src/menu/@types';
import MenuItem from './Item';
import Logo from 'UI/Logo';

interface IProps {
  activeTab: TSection;
  onItemClick: (section: TSection) => void;
}

export default function Menu({onItemClick, activeTab}: IProps) {
  const onClick = useCallback(section => () => onItemClick(section), []);

  return (
    <div className={style.container}>
      <Logo />
      <div className={style.main}>
        <MenuItem
          isActive={activeTab === 'dashboard'}
          title='Dashboard'
          icon='conversation'
          onClick={onClick('conversation')}
        />
        <MenuItem
          isActive={activeTab === 'widgets'}
          title='Widget'
          icon='dashboard-bold'
          onClick={onClick('widgets')}
        />
      </div>
      <MenuItem title='Logout' icon='out' onClick={onClick('logout')} />
    </div>
  );
}
