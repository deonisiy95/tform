import React, {FC} from 'react';
import style from './style.less';
import cn from 'classnames';

type TTabs = {
  key: string;
  title: string;
};

interface IProps {
  tabs: TTabs[];
  active?: string;
  onTabClick: (tab: string) => void;
}

export const Tabs: FC<IProps> = ({tabs, active, onTabClick}) => {
  const activeTab = active ?? tabs[0];

  return (
    <div className={style.tabs}>
      {tabs.map(tab => (
        <div
          key={tab.key}
          className={cn(style.tabContainer, {[style.active]: activeTab === tab.key})}
        >
          <div className={style.tab} onClick={() => onTabClick(tab.key)} aria-label={tab.title} />
        </div>
      ))}
    </div>
  );
};
