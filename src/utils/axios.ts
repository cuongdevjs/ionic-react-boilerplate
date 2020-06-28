import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosPromise,
} from "axios";
import { getItem, clearAll } from "utils/lsStorage";
// import { store } from 'App';
// import { logout } from 'store/actions/actionAuth';
import Qs from "qs";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

let config = {
  baseURL: process.env.REACT_APP_API_URL || "",
  timeout: 120 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios: AxiosInstance = axios.create(config);

_axios.interceptors.request.use(
  async function(config) {
    // Do something before request
    const token = await getItem("meeting-token");
    if (token) {
      config.headers["api-token"] = `${token}`;
    }
    config.paramsSerializer = (params: any) => {
      return Qs.stringify(params, {
        arrayFormat: "brackets",
        encode: false,
      });
    };
    return config;
  },
  function(error: AxiosError) {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response: AxiosResponse) {
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response && error.response.status) {
      if (error.response.status !== 200) {
        console.log(error.response.data);

        if (error.response.status === 401) {
          clearAll();
        }
      }
    }
    return Promise.reject(error);
  }
);

function $get(url: string, params?: object): AxiosPromise {
  return _axios.get(url, {
    params,
  });
}

function $post(url: string, config?: object | string): AxiosPromise {
  return _axios.post(url, config);
}

function $put(url: string, config?: object | string): AxiosPromise {
  return _axios.put(url, config);
}

function $delete(url: string, config: object | string): AxiosPromise {
  return _axios.delete(url, { data: config });
}

export { $get, $post, $put, $delete };
export default _axios;
