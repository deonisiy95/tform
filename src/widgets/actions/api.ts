import Api from 'src/core/scripts/api';
import {IWidget} from 'src/widgets/@types';

export const widgetsApiActions = {
  get: (): Promise<IWidget[]> => {
    return Api.send('widgets', 'GET');
  },
  check: (data: {token: string; name: string}): Promise<{agents: IWidget['agents']}> => {
    return Api.send('widgets/check', 'POST', data);
  },
  create: (data: {
    token: string;
    name: string;
    agents: IWidget['agents'];
  }): Promise<IWidget> => {
    return Api.send('widgets', 'POST', data);
  },
  update: (data: Partial<IWidget>): Promise<IWidget> => {
    return Api.send(`widgets/${data.widgetId}`, 'POST', data);
  },
};
