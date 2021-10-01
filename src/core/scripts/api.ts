import {host} from 'src/core/const/env';
import store from 'src/store';
import logger from 'src/core/scripts/logger';

const console = logger('[API]');

type THttpMethods = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';

export default class Api {
  public static send = async <T>(
    url: string,
    method: THttpMethods = 'GET',
    data: Object = null,
    useToken = true
  ): Promise<T> => {
    return new Promise(async (resolve, reject) => {
      const tokens = store.getState().auth.tokens;
      const headers: HeadersInit = {};
      let body: BodyInit = null;

      if (method === 'POST') {
        headers['Content-Type'] = 'application/json;charset=utf-8';
      }

      useToken && (headers['Authorization'] = tokens?.accessToken);

      if (data) {
        body = JSON.stringify(data);
      }

      const response = await fetch(`${host}/${url}`, {
        method,
        headers,
        body
      });

      const result = await response.json();

      if (response.ok) {
        resolve(result);
      } else {
        console.error('Error request', response.status);

        reject({
          code: response.status,
          error: result?.message
        });
      }
    });
  };
}
