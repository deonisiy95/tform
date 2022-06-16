import React, {useCallback} from 'react';
import style from './style.less';
import {TSection} from 'src/menu/@types';
import MenuItem from './Item';

interface IProps {
  onItemClick: (section: TSection) => void;
}

export default function Menu({onItemClick}: IProps) {
  const onClick = useCallback(section => () => onItemClick(section), []);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <MenuItem title='Dashboard' icon='conversation' onClick={onClick('conversation')}/>
        <MenuItem title='Widget' icon='dashboard-bold' onClick={onClick('widgets')}/>
      </div>
      <MenuItem title='Logout' icon='out' onClick={onClick('logout')}/>
    </div>
  );
}
