import { Friend } from '@/api/friend';
import { ErrorResponse } from '@/api/types';
import { useModal } from '@/hooks/modal/useModal';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

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

export const useAcceptFriend = () => {
  const { open } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (friendshipId: number) => Friend.accept(friendshipId),
    onSuccess: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ['infiniteFriendRequestList', true],
      });
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};
