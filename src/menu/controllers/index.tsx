import React, {useCallback} from 'react';
import Menu from 'src/menu/components';
import {navigate} from 'src/core/scripts/navigation';
import {TSection} from 'src/menu/@types';

export default function MenuController() {
  const onClick = useCallback((section: TSection) => {
    navigate(`/${section}`);
  }, []);
  return <Menu onItemClick={onClick} />;
}
