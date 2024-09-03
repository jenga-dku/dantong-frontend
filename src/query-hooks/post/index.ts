import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { Post } from '@api/post';
import { FilterCategory } from '@src/types/news-category';
import { useModal } from '@/hooks/modal/useModal';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/api/types';

export const useGetPostList = (category: string) =>
  useSuspenseQuery({
    queryFn: () => Post.getPostList(category),
    queryKey: ['postList'],
  });

export const useGetInfinitePostList = ({
  category,
  size,
}: {
  size: number;
  category: FilterCategory;
}) =>
  useInfiniteQuery({
    queryKey: ['infinitePostList'],
    queryFn: ({ pageParam: pageNum }) =>
      Post.getInfinitePostList({ page: pageNum, size, category }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });

export const useGetPostDetail = (id: number) =>
  useQuery({
    queryFn: () => Post.getPostDetail(id),
    queryKey: ['postDetail'],
    gcTime: 0,
  });

export const useDeletePost = () => {
  const { open } = useModal();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (postId: number) => Post.delete(postId),
    onSuccess: () => {
      navigate('/news');
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message.join(''),
      }),
  });
};
