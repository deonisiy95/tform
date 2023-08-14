import React, {FC} from 'react';
import {AccountBlockComponent} from 'src/account/components/AccountBlock';
import {useSelector} from 'react-redux';
import {selectAccount} from 'src/account/selectors';
import Field from 'UI/Field';
import {Select} from 'UI/Select';
import {localization} from 'src/l10n';

export const AccountBlock: FC = () => {
  const account = useSelector(selectAccount);
  const onChaneLocale = async (locale: string) => {
    await localization.setLocale(locale);
    window.location.reload();
  };

  return (
    <AccountBlockComponent email={account?.email} name={account?.name}>
      <Field title={'Язык'}>
        <Select
          options={[
            {label: 'English', value: 'en'},
            {label: 'Русский', value: 'ru'}
          ]}
          value={localization.getLocale()}
          onChange={onChaneLocale}
        />
      </Field>
    </AccountBlockComponent>
  );
};
