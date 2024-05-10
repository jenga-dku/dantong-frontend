import { useQuery } from '@tanstack/react-query';
import { Post } from '../../api/post';

export const useGetPostList = (category: string) =>
  useQuery({
    queryFn: () => Post.getPostList(category),
    queryKey: ['postList'],
  });

export const useGetPostDetail = (id: number) =>
  useQuery({
    queryFn: () => Post.getPostDetail(id),
    queryKey: ['postDetail'],
  });
