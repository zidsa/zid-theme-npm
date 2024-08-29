import axios, {
  AxiosError,
  AxiosResponse,
  Method,
} from 'axios';
import {getToken} from "../helper/auth";
import logger from "../console/logger";

class Api {
  private base_url = 'https://api.zid.sa/v1' as string;
  private headers = {} as { [key: string]: string };
  private route = '' as string;
  private method = 'GET' as Method;
  private body: unknown;
  private token = '';
  private params = '' as string;
  private key = '' as string;

  constructor() {
    this.token = getToken();
  }


  public addParams(params?: { key: string; value: string | string[] }[]) {
    params &&
      params.length > 0 &&
      params?.map(
        ({ key, value }) =>
          (this.params += `${this.params === '' ? '?' : '&'}${key}=${
            Array.isArray(value) ? value.join(',') : value
          }`)
      );
    return this;
  }

  public addKey(key: string) {
    this.key = this.key ? `${this.key}/${key}` : `/${key}`;
    return this;
  }

  public addHeaders(headers: { key: string; value: string }[]) {
    headers.map(({ key, value }) => (this.headers[key] = value));
    return this;
  }

  public addUserToken() {
    this.headers['x-partner-token'] = `${this.token}`;
    return this;
  }

  public addRoute(endpoint: string) {
    this.route = `${this.base_url}${endpoint}`;
    return this;
  }

  public addBody(body: unknown) {
    this.body = body;
    return this;
  }

  public post() {
    this.method = 'POST';
    return this;
  }

  public get() {
    this.method = 'GET';
    return this;
  }

  public put() {
    this.method = 'PUT';
    return this;
  }

  public delete() {
    this.method = 'DELETE';
    return this;
  }

  public send(): Promise<unknown> {
    const url = `${this.route}${this.key}${this.params}`;
    return new Promise((resolve, reject) => {
      axios({
        url,
        method: this.method,
        headers: this.headers,
        data: this.body,
      })
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          if (error.response) {
            if (error.response.status === 401) {
              logger.error('Token expired, please login again');
              return;
            }
            const { message } = error.response.data as {
              message: string;
            };
            return reject(message);
          }
          reject();
        });
    });
  }
}

export default Api;
