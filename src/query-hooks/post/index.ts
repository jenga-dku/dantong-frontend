import {
  useInfiniteQuery,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { Post } from '@api/post';
import { FilterCategory } from '@src/types/news-category';

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
