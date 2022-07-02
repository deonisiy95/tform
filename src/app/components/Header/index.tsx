import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import style from './style.less';

const titles = {
  '/widgets': 'Виджеты',
  '/conversation': 'Обращения'
};

export default function Header() {
  const location = useLocation();
  const title = useMemo(() => titles[location.pathname] ?? '', [location]);

  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
    </div>
  );
}
