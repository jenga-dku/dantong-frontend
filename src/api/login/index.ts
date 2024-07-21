import { API } from '@api/api';
import { LoginInfo } from './types';

export const Login = {
  async post(data: LoginInfo) {
    const response = await API.post('/user/login', data);
    return response.data;
  },
};
