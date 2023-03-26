import React from 'react';
import style from './style.less';
import EmptyBox from 'src/app/components/EmptyBox';

export default function Dashboard() {
  return (
    <div className={style.dashboard}>
      <EmptyBox
        page='dashboard'
        text={l10n('dashboard.empty')}
        buttonText={l10n('widgets.add')}
        buttonHandler={() => {}}
        loading={false}
      />
    </div>
  );
}
