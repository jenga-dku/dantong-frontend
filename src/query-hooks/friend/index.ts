import { Friend } from '@/api/friend';
import { PostDetailResponse } from '@/api/post/types';
import { ErrorResponse } from '@/api/types';
import { useModal } from '@/hooks/modal/useModal';
import { useAuthStore } from '@/stores/auth-stores';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
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
  });

export const useGetInfiniteFriendRequestList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['infiniteFriendRequestList'],
    queryFn: ({ pageParam: pageNum }) =>
      Friend.getInfiniteFriendRequestList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
  });

export const useAcceptFriend = () => {
  const { open } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (friendshipId: number) => Friend.accept(friendshipId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['infiniteFriendRequestList'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['infiniteFriendList'],
      });
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};

export const useDeleteFriendRequest = () => {
  const { open } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (friendshipId: number) => Friend.deny(friendshipId),
    onSuccess: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ['infiniteFriendRequestList'],
      });
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};

export const useDeleteFriend = () => {
  const { open } = useModal();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (friendshipId: number) => Friend.delete(friendshipId),
    onSuccess: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ['infiniteFriendList'],
      });
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};

export const useRequestFriend = () => {
  const { open } = useModal();
  return useMutation({
    mutationFn: (studentId: number) => Friend.request(studentId),
    onSuccess: async () => {
      open({
        title: '신청 완료',
        desc: '친구 신청이 완료되었습니다.',
      });
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};

export const useGetFriendEvent = (studentId: string) => {
  return useQuery({
    queryFn: () => Friend.getFriendEvent(studentId),
    queryKey: ['friend-event-list', studentId],
    enabled: studentId.length > 0,
    gcTime: 0,
  });
};

export const useGetFriendEventByPost = (postId: number) => {
  const { isLoggedIn } = useAuthStore();
  return useQuery({
    queryFn: () => Friend.getFriendEventByPost(postId),
    queryKey: ['friend-event-list-by-post'],
    enabled: isLoggedIn,
  });
};
