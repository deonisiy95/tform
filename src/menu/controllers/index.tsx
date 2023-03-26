import React, {useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Menu from 'src/menu/components';
import {navigate} from 'src/core/scripts/navigation';
import {TSection} from 'src/menu/@types';
import actions from 'src/auth/actions';

export default function MenuController() {
  const dispatch = useDispatch();

  const onClick = useCallback((section: TSection) => {
    switch (section) {
      case 'logout':
        dispatch(actions.logout());
        break;
      default:
        navigate(`/${section}`);
        break;
    }
  }, []);
  const location = useLocation();
  const activeTab = useMemo(() => {
    const tab = (location.pathname ?? '/').split('/')[1];

    if (['dashboard', 'widgets'].includes(tab)) {
      return tab;
    }

    return 'dashboard';
  }, [location]);

  return <Menu activeTab={activeTab as TSection} onItemClick={onClick} />;
}
