import axios from 'axios';
import { API_BASE_URL } from '@/constant';
import { getToken } from '@/utils/handleAuth';

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    common: { Authorization: `Bearer ${getToken()}` },
  },
});
