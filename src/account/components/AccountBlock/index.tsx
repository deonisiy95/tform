import React, {FC, PropsWithChildren, useCallback} from 'react';
import style from './style.less';
import {Dropdown} from 'UI/Dropdown';
import Icon from 'UI/Icon';

interface IProps {
  email: string;
  name: string;
}

export const AccountBlockComponent: FC<PropsWithChildren<IProps>> = ({email, name, children}) => {
  const renderProfileInfo = useCallback(({isOpen}: {isOpen: boolean}) => {
    return (
      <div className={style.profile}>
        <div className={style.avatar} />
        <div className={style.name}>{name ?? email}</div>
        <Icon type={isOpen ? 'arrow-up' : 'arrow-down'} className={style.icon} />
      </div>
    );
  }, [name, email]);

  return (
    <div className={style.block}>
      <Dropdown contentClassName={style.dropdownContent} caption={renderProfileInfo}>
        {children}
      </Dropdown>
    </div>
  );
};
