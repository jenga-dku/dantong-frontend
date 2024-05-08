import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE_URL } from '../constant';

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export async function post<T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
) {
  const response = await API.post<T, AxiosResponse<T, D>, D>(url, data, {
    ...config,
  });
  return response.data;
}
