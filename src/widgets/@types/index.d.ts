export interface IWidget {
  name: string;
  token: string;
  userId: string;
  widgetId: string;
  agents: Array<{
    id: number;
    name: string;
    username: string;
  }>;
}
export interface IWidgetStore {
  data: IWidget[],
  loading: boolean
}
