export namespace NSAuth {
  interface IStore {
    isAuth: boolean;
    loading: boolean;
    tokens: IToken;
  }
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

export interface ISignUpData {
  name: string;
  email: string;
  password: string;
}
