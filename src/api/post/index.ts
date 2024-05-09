import { API } from '../api';
import { PostListResponse } from './types';

export const Post = {
  async getPostList(): Promise<PostListResponse> {
    const response = await API.get('/board/list');
    return response.data;
  },
};
