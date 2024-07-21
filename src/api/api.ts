import axios from 'axios';
import { API_BASE_URL } from '@/constant';

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
