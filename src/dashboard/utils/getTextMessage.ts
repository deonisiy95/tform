export const getShortTextMessage = (message: IMessage) => {
  return message?.data
    .map(item => {
      return item.value;
    })
    .join(', ');
};

export const getTextMessage = (message: IMessage) => {
  return message?.data.reduce((acc, item) => {
    return `${acc}\n${item.key}: ${item.value}`;
  }, '');
};
