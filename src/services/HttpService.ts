import axios, { AxiosRequestConfig } from "axios";
import AuthService from "./AuthService";

const configure = () => {
  axios.interceptors.request.use((config: AxiosRequestConfig<any>) => {
    if (AuthService.isLoggedIn()) {
      const callback = () => {
        const newConfig = {
          ...config,
          headers: {
            Authorization: `Bearer ${AuthService.getToken()}`,
          },
        };
        return Promise.resolve(newConfig);
      };
      return AuthService.updateToken(callback);
    }
  });
};

const getAxiosClient = () => axios;

const HttpService = {
  configure,
  getAxiosClient,
};

export default HttpService;
