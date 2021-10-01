export namespace NSAuth {
  interface IStore {
    isAuth: boolean;
    tokens: IToken;
  }
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}
