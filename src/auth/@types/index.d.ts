export namespace NSAuth {
  interface IStore {
    isAuth: boolean;
    loading: boolean;
    tokens: IToken;
    processing: {
      login: boolean,
      signup: boolean
    };
    error: {
      login: string,
      signup: string
    };
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
