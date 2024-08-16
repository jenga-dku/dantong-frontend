import { PageParams } from '../types';
import { API } from '../api';
import { getToken } from '@/utils/handleAuth';
import { FriendListItem } from './types';
import { PostDetailResponse } from '../post/types';

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
    const response = await API.post(`/friend/accept/${friendshipId}`, null);
    return response.data;
  },
  async deny(friendshipId: number) {
    const response = await API.delete(`/friend/deleteRequest/${friendshipId}`);
    return response.data;
  },
  async delete(friendshipId: number) {
    const response = await API.delete(`/friend/deleteFriend/${friendshipId}`);
    return response.data;
  },
  async request(studentId: number) {
    const response = await API.post(`/friend/send/${studentId}`);
    return response.data;
  },
  async getFriendEvent(studentId: string): Promise<PostDetailResponse[]> {
    const response = await API.get(
      `/friend/submit-list/studentId/${studentId}`,
    );
    return response.data;
  },
  async getFriendEventByPost(
    postId: number,
  ): Promise<Omit<FriendListItem, 'friendshipId'>[]> {
    const response = await API.get(`/friend/submit-list/postId/${postId}`);
    return response.data;
  },
};
