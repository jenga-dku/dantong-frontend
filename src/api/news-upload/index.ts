import { getToken } from '@utils/handleAuth';
import { API } from '@api/api';
import { NewsUpload } from './types';

export const News = {
  async post(data: NewsUpload): Promise<{ id: number }> {
    const response = await API.post(`/post`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response?.data ?? null;
  },
};
