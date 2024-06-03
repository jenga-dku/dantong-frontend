import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Post } from '../../api/post';
import { FilterCategory } from '../../types/news-category';

export const useGetPostList = (category: string) =>
  useQuery({
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
      lastPage.length ? allPages.length + 1 : undefined,
  });

export const useGetPostDetail = (id: number) =>
  useQuery({
    queryFn: () => Post.getPostDetail(id),
    queryKey: ['postDetail'],
  });
