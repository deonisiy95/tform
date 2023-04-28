import Api from 'src/core/scripts/api';

export const accountApiActions = {
  get: (): Promise<TResponse<{ account: TAccount }>> => {
    return Api.send('account', 'GET');
  },
};
