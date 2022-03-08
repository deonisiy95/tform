import Api from 'src/core/scripts/api';
import {IToken} from 'src/auth/@types';
import {ISignUpData} from 'src/auth/@types';

export const authApiActions = {
  refreshToken: (token: string): Promise<{tokens: IToken}> => {
    return Api.send(
      'refresh-tokens',
      'POST',
      {
        refreshToken: token
      },
      false
    );
  },
  signUp: (data: ISignUpData): Promise<{tokens: IToken}> => {
    return Api.send<{tokens: IToken}>('signup', 'POST', data, false);
  }
};
