import Api from 'src/core/scripts/api';
import {IFormData} from 'src/form_builder/@types/formBuilder';

export const formApiActions = {
  // get: (): Promise<IWidget[]> => {
  //   return Api.send('widgets', 'GET');
  // },
  update: (data: Partial<IFormData>): Promise<void> => {
    return Api.send(`widgets/form/${data.widgetId}`, 'POST', data);
  },
};
