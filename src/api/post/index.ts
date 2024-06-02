import { API } from '../api';
import { PostDetailResponse, PostListResponse } from './types';

export const Post = {
  async getPostList(category: string): Promise<PostListResponse> {
    const isCategoryViewAll = category.length === 0;
    const response = await API.get(
      `/post/list${isCategoryViewAll ? '' : `?category=${category}`}?sort=createdAt,desc`,
    );
    return response.data;
  },
  async getPostDetail(id: number): Promise<PostDetailResponse> {
    const response = await API.get(`/post/${id}`);
    return response.data;
  },
};
