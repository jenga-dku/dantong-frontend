import { getToken } from '@utils/handleAuth';
import { API } from '@api/api';
import { PostDetailResponse } from '../post/types';
import { ModifiedUserInfo, UserInfoResponse } from './types';

export const User = {
  async getUserInfo(): Promise<UserInfoResponse> {
    const response = await API.get(`/user`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response?.data ?? null;
  },
  async getAppliedEventList(): Promise<PostDetailResponse[]> {
    const response = await API.get(`/survey/my/ticket`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
  async patchUserInfo(data: ModifiedUserInfo) {
    const response = await API.patch(`/user/edit`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response?.data ?? null;
  },
};
