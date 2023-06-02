import Api from 'src/core/scripts/api';

export const getMessages = (
  offset: number,
  limit: number
): Promise<IGetMessagesResponse | void> => {
  return Api.send<IGetMessagesResponse>('widgets/messages', 'GET', {
    limit,
    offset
  }).catch(error => console.log('Error get messages', error));
};
