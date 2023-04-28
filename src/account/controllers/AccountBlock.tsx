import React, {FC} from 'react';
import {AccountBlockComponent} from 'src/account/components/AccountBlock';
import {useSelector} from 'react-redux';
import {selectAccount} from 'src/account/selectors';

export const AccountBlock: FC = () => {
  const account = useSelector(selectAccount);

  return <AccountBlockComponent email={account.email} name={account.name} />;
};
