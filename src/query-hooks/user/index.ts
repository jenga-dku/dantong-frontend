import { useMutation, useQuery } from '@tanstack/react-query';
import { User } from '@api/user';
import { useAuthStore } from '@stores/auth-stores';
import { ErrorResponse } from '@api/types';
import { ModifiedUserInfo, UserInfoResponse } from '@api/user/types';
import { AxiosError } from 'axios';
import { getToken } from '@utils/handleAuth';
import { PostDetailResponse } from '@api/post/types';
import { useModal } from '@hooks/useModal';
import { useNavigate } from 'react-router-dom';

export const useGetUserInfo = () => {
  const { isLoggedIn } = useAuthStore();

  return useQuery<UserInfoResponse, AxiosError<ErrorResponse>>({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info', isLoggedIn],
    enabled: isLoggedIn && getToken() !== null,
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

  return useMutation({
    mutationFn: (data: ModifiedUserInfo) => User.patchUserInfo(data),
    onSuccess: () => {
      navigate('/settings');
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};
