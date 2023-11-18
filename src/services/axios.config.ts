import axios from "axios";
// import { ACCESS_TOKEN } from "src/contants";
// import { getLocal } from "src/utils";
import { ACCESS_TOKEN } from "src/contants";
import { getLocal } from "src/utils";

const BASE_URL = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim";
const RAP = "https://movienew.cybersoft.edu.vn/api/QuanLyRap";
/**
 * axios
 * - axiosWithoutAuth: những api public
 * - axiosAuth: những api private - cần xác minh
 */

export const axiosWithoutAuth = axios.create({  
  baseURL: BASE_URL,
  timeout: 180000,
});
axiosWithoutAuth.interceptors.request.use(
  (config) => {
    config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`;
    // console.log(getLocal(ACCESS_TOKEN));
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);


export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  // Thời gian đợi một request hoàn thành.
  timeout: 180_000, // 180000
});

axiosAuth.interceptors.request.use(
  (config) => {
    config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`;
    // console.log(getLocal(ACCESS_TOKEN));
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export const axiosAuth_2 = axios.create({
  baseURL: RAP,
  // Thời gian đợi một request hoàn thành.
  timeout: 180_000, // 180000
});

axiosAuth_2.interceptors.request.use(
  (config) => {
    config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`;
    // console.log(getLocal(ACCESS_TOKEN));
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
