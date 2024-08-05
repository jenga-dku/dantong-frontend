import { Friend } from '@/api/friend';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetInfiniteFriendList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['infiniteFriendList'],
    queryFn: ({ pageParam: pageNum }) =>
      Friend.getInfiniteFriendList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });

export const useGetInfiniteFriendRequestList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['infiniteFriendRequestList'],
    queryFn: ({ pageParam: pageNum }) =>
      Friend.getInfiniteFriendRequestList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });
