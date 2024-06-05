import { getToken } from '../../utils/handleAuth';
import { API } from '../api';
import { UserInfoResponse } from './types';

export const User = {
  async getUserInfo(): Promise<UserInfoResponse> {
    const response = await API.get(`/user`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response?.data ?? null;
  },
};
