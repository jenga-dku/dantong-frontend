import { Friend } from '@/api/friend';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetInfiniteFriendList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['infiniteFormList'],
    queryFn: ({ pageParam: pageNum }) =>
      Friend.getInfiniteFormList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });
