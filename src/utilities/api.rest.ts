import axios, {
  Method,
} from 'axios';
import {getToken} from "../helper/auth";
import FormData from 'form-data'; // Node.js FormData

class Api {
  private base_url = 'http://localhost:9090/v1' as string;
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

  public addFormData(formData: FormData) {
    this.body = formData;
    this.headers['Content-Type'] = 'multipart/form-data';
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

  public async send(): Promise<unknown> {
    const url = `${this.route}${this.key}${this.params}`;
    try {
      const response = await axios({
        url,
        method: this.method,
        headers: this.headers,
        data: this.body,
        timeout: 500000,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            console.log('Token expired, please login again');
            return; // Avoid rejecting the promise here
          }
          const { message } = error.response.data as { message: string };
          console.error('API Error:', error);
          throw new Error(message);
        }
      }
      console.error('Unexpected error during API call:', error);
      throw error; // Rethrow unexpected errors
    }
  }
}

export default Api;
