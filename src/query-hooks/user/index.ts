import { useQuery } from '@tanstack/react-query';
import { User } from '../../api/user';
import { useAuthStore } from '../../stores/auth-stores';
import { ErrorResponse } from '../../api/types';
import { UserInfoResponse } from '../../api/user/types';
import { AxiosError } from 'axios';
import { getToken } from '../../utils/handleAuth';
import { FormListItem } from '../../api/form/types';
import { PostDetailResponse } from '../../api/post/types';

export const useGetUserInfo = () => {
  const { isLoggedIn } = useAuthStore();

  return useQuery<UserInfoResponse, AxiosError<ErrorResponse>>({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info', isLoggedIn],
    enabled: isLoggedIn && getToken() !== null,
    gcTime: 0,
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
