type IMessage = {
  data: Array<{
    key: string;
    value: string;
  }>;
  createdAt: number;
  widgetId: string;
};

type IGetMessagesResponse = {
  messages: Array<IMessage>;
};
