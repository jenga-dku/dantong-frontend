import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User } from '@api/user';
import { useAuthStore } from '@stores/auth-stores';
import { ErrorResponse } from '@api/types';
import { ModifiedUserInfo, UserInfoResponse } from '@api/user/types';
import { AxiosError } from 'axios';
import { getToken } from '@utils/handleAuth';
import { PostDetailResponse } from '@api/post/types';
import { useModal } from '@/hooks/modal/useModal';
import { useNavigate } from 'react-router-dom';

export const useGetUserInfo = () => {
  const { isLoggedIn } = useAuthStore();

  return useQuery<UserInfoResponse, AxiosError<ErrorResponse>>({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info', isLoggedIn],
    enabled: isLoggedIn,
    gcTime: Infinity,
    staleTime: Infinity,
  });
};

export const useGetAppliedEvents = () => {
  const { isLoggedIn } = useAuthStore();
  return useQuery<PostDetailResponse[], AxiosError<ErrorResponse>>({
    queryFn: () => User.getAppliedEventList(),
    queryKey: ['applied-event-list'],
    enabled: isLoggedIn && getToken() !== null,
    gcTime: 0,
  });
};

export const usePatchUserInfo = () => {
  const { open } = useModal();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ModifiedUserInfo) => User.patchUserInfo(data),
    onSuccess: async () => {
      await queryClient
        .invalidateQueries({
          queryKey: ['user-info', true],
        })
        .then(() => navigate('/settings'));
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
    onSettled: async () => {},
  });
};

export const useReissueToken = () => {
  const { setIsTokenIssued } = useAuthStore();

  return useMutation({
    mutationFn: () => User.reissueToken(),
    onSuccess: ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('tokenDate', JSON.stringify(new Date()));
      setIsTokenIssued(true);
    },
    onSettled: async () => {},
  });
};
