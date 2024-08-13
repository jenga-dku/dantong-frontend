import { PageParams } from '../types';
import { API } from '../api';
import { getToken } from '@/utils/handleAuth';
import { FriendListItem } from './types';

export const Friend = {
  async getInfiniteFriendList({
    page,
    size,
  }: PageParams): Promise<FriendListItem[]> {
    const response = await API.get(`/friend/list?page=${page}&size=${size}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const list = (await response.data.content) as FriendListItem[];
    return list;
  },
  async getInfiniteFriendRequestList({
    page,
    size,
  }: PageParams): Promise<FriendListItem[]> {
    const response = await API.get(
      `/friend/request?page=${page}&size=${size}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    const list = (await response.data.content) as FriendListItem[];
    return list;
  },
  async accept(friendshipId: number) {
    const response = await API.post(`/friend/accept/${friendshipId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
};
