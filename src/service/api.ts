import axios, { AxiosInstance } from 'axios';

// %======================== api ========================% //

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL, //?
    timeout: 5000,
  });

  return api;
};

