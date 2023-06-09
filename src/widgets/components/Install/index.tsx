import React, {FC} from 'react';
import style from './style.less';

interface IProps {
  widgetCode: string;
}

export const InstallWidgetComponent: FC<IProps> = ({widgetCode}) => {
  return (
    <div className={style.installPage}>
      <h3>{l10n('widget.settings.install.title')}</h3>
      <p>{l10n('widget.settings.install.text')}</p>
      <div className={style.code}>{widgetCode}</div>
    </div>
  );
};
