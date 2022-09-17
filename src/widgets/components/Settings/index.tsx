import React, {FC, useState, useMemo, useCallback} from 'react';
import style from './style.less';
import {Tabs} from 'UI/Tabs';

interface IProps {
  name: string;
  widget_id?: number;
  options: React.ReactNode;
  design: React.ReactNode;
}

export const SettingsWidgetComponent: FC<IProps> = ({name, options, design}) => {
  const tabs = useMemo(
    () => [
      {key: 'options', title: l10n('widget.settings.options')},
      {key: 'design', title: l10n('widget.settings.design')}
    ],
    []
  );

  const [activeTab, setActiveTab] = useState('options');

  const onTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className={style.popup}>
      <h2>{`${l10n('settings')} ${name}`}</h2>
      <Tabs tabs={tabs} active={activeTab} onTabClick={onTabClick} />
      {activeTab === 'options' ? options : design}
    </div>
  );
};
