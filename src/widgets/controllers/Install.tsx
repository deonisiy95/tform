import React, {FC} from 'react';
import {InstallWidgetComponent} from 'src/widgets/components/Install';
import config from 'src/config';

interface IProps {
  widgetId: string;
}

export const InstallWidget: FC<IProps> = ({widgetId}) => {
  const code = `<script src="${config.widget_host}/loader.js" data-tf-id="${widgetId}"></script>`;

  return <InstallWidgetComponent widgetCode={code} />;
};
