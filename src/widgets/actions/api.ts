import Api from 'src/core/scripts/api';
import {IWidget} from 'src/widgets/@types';

export const widgetsApiActions = {
  get: (): Promise<IWidget[]> => {
    return Api.send(
      'widgets',
      'GET'
    );
  }
};
