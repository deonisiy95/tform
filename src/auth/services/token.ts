import store from 'src/store';
import actions from 'src/auth/actions';
import {authApiActions} from 'src/auth/actions/api';
import {IToken} from 'src/auth/@types';

interface ITokenData {
  exp: number;
  iat: number;
  userId: number;
  type: 'access' | 'refresh';
}

class TokenService {
  private token: IToken = null;

  public getToken = async (): Promise<string> => {
    if (this.isExpired()) {
      await this.updateToken();
    }

    return this.token?.accessToken;
  };

  public setToken = (token: IToken): void => {
    this.token = token;
    store.dispatch(actions.setToken(token));
  };

  private updateToken = async (): Promise<void> => {
    try {
      const result = await authApiActions.refreshToken(this.token?.refreshToken);
      this.setToken(result.tokens);
    } catch (error) {
      this.token = null;
      console.error('Error refresh token');
    }
  };

  private isExpired = (token?: string) => {
    const expirationDate = this.getExpirationDate(token);

    if (!expirationDate) {
      return false;
    }

    return Date.now() > expirationDate;
  };

  private getExpirationDate = (token?: string): number | null => {
    if (!token) {
      return null;
    }

    const parsedToken = this.parseToken(token);

    return parsedToken?.exp * 1000 || null;
  };

  private parseToken = (token: string): ITokenData => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  };
}

export default new TokenService();
