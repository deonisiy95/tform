import {host} from 'src/core/const/env';
import logger from 'src/core/scripts/logger';
import TokenService from 'src/auth/services/token';

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
      const headers: HeadersInit = {};
      let body: BodyInit = null;
      let urlParams: URLSearchParams = null;

      if (method === 'POST') {
        headers['Content-Type'] = 'application/json;charset=utf-8';
      }

      if (useToken) {
        headers['Authorization'] = await TokenService.getToken();
      }

      if (data) {
        if (method === 'GET') {
          urlParams = new URLSearchParams(data as URLSearchParams);
        } else {
          body = JSON.stringify(data);
        }
      }

      try {
        const response = await fetch(
          `${host}/${url}${urlParams ? '?' + urlParams.toString() : ''}`,
          {
            method,
            headers,
            body
          }
        );

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
      } catch (error) {
        console.error('Error request', error);

        reject({
          error: 'uncaught_error'
        });
      }
    });
  };
}
