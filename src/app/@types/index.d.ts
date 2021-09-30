export namespace NSApp {
  interface IStore {
    auth: boolean;
    token: IToken;
  }
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}
