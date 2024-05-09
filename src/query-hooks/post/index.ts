import { useQuery } from '@tanstack/react-query';
import { Post } from '../../api/post';

export const useGetPostList = () =>
  useQuery({
    queryFn: () => Post.getPostList(),
    queryKey: ['postList'],
  });
