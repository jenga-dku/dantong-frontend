import { FilterCategory } from '@src/types/news-category';
import { API } from '@api/api';
import { PageParams } from '../types';
import {
  PostDeleteResponse,
  PostDetailResponse,
  PostListResponse,
} from './types';

export const Post = {
  async getInfinitePostList({
    category,
    page,
    size,
  }: PageParams & { category: FilterCategory }): Promise<PostDetailResponse[]> {
    const isCategoryViewAll = category.length === 0;
    const response = await API.get(
      `/post/list${isCategoryViewAll ? '?' : `?category=${category}&`}page=${page}&size=${size}&sort=createdAt,desc`,
    );
    const postList = (await response.data.content) as PostDetailResponse[];
    return postList;
  },
  async getPostList(category: string): Promise<PostListResponse> {
    const isCategoryViewAll = category.length === 0;
    const response = await API.get(
      `/post/list${isCategoryViewAll ? '?' : `?category=${category}&`}sort=createdAt,desc`,
    );
    return response.data;
  },
  async getPostDetail(id: number): Promise<PostDetailResponse> {
    const response = await API.get(`/post/${id}`);
    return response.data;
  },
  async delete(id: number): Promise<PostDeleteResponse> {
    const response = await API.delete(`/post/${id}`);
    return response.data;
  },
};
