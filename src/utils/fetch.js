import { TOKEN } from '@/constants/localStorage';
import API from '@/constants/api';
import errorChecker from './errorChecker';
import { getItem, setItem } from './localStorage';

class Fetch {
  _api = API.MAIN;
  _token = '';

  async getToken() {
    const token = await getItem(TOKEN);
    this._token = token;
    return token;
  }

  // set / get api
  get api() {
    return this._api;
  }

  set api(api) {
    this._api = api;
  }

  // set / get token
  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
    setItem(TOKEN, token);
  }

  fetch({
    url = '',
    urlPostfix = '',
    method = 'GET',
    params = null,
    body = null,
    header = null,
    useToken = true,
  }) {
    let headers = {};

    if (useToken) {
      headers.Authorization = this._token && `Token ${this._token}`;
    }

    if (urlPostfix && !url) {
      url = new URL(`${this._api}${urlPostfix}`);
    }
    if (params) {
      url = `${url}?${new URLSearchParams(params)}`;
    }
    if (body) {
      body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json';
    }
    if (header) {
      headers = { ...headers, ...header };
    }
    return fetch(url, {
      method,
      body,
      headers,
    }).then(resp => errorChecker(resp));
  }
}

const fetchSingleton = new Fetch();
export default fetchSingleton;
