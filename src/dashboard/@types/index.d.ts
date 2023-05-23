type IMessage = {
  data: Array<{
    _id: string;
    key: string;
    value: string;
  }>;
  createdAt: number;
  widgetId: string;
};

type IGetMessagesResponse = {
  messages: Array<IMessage>;
  total: number;
};
