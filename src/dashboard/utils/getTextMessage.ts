export const getTextMessage = (message: IMessage) => {
  return message.data
    .map(item => {
      return item.value;
    })
    .join(', ');
};
