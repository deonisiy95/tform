import Api from 'src/core/scripts/api';
import {IToken} from 'src/auth/@types';

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
  }
};
