import React, {FC, useState, useMemo, useCallback} from 'react';
import style from './style.less';
import {Tabs} from 'UI/Tabs';

interface IProps {
  name: string;
  widget_id?: number;
  options: React.ReactNode;
  design: React.ReactNode;
  install: React.ReactNode;
  label: React.ReactNode;
}

export const SettingsWidgetComponent: FC<IProps> = ({options, design, install, label}) => {
  const tabs = useMemo(
    () => [
      {key: 'options', title: l10n('widget.settings.options')},
      {key: 'design', title: l10n('widget.settings.design')},
      {key: 'install', title: l10n('widget.settings.install')},
      {key: 'label', title: l10n('widget.settings.label')}
    ],
    []
  );

  const [activeTab, setActiveTab] = useState('options');

  const onTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const content = useMemo(() => {
    switch (activeTab) {
      case 'design':
        return design;
      case 'install':
        return install;
      case 'label':
        return label;
      default:
        return options;
    }
  }, [activeTab, options, design, install]);

  return (
    <div className={style.container}>
      <Tabs tabs={tabs} active={activeTab} onTabClick={onTabClick} />
      {content}
    </div>
  );
};
