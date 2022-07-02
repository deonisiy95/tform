import React, {useCallback, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import Menu from 'src/menu/components';
import {navigate} from 'src/core/scripts/navigation';
import {TSection} from 'src/menu/@types';

export default function MenuController() {
  const onClick = useCallback((section: TSection) => {
    navigate(`/${section}`);
  }, []);
  const location = useLocation();
  const activeTab = useMemo(() => {
    const tab = (location.pathname ?? '/').slice(1);

    if (['dashboard', 'widgets'].includes(tab)) {
      return tab;
    }

    return 'dashboard';
  }, [location]);

  return <Menu activeTab={activeTab} onItemClick={onClick} />;
}
