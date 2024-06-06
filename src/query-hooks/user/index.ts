import { useQuery } from '@tanstack/react-query';
import { User } from '../../api/user';
import { useAuthStore } from '../../stores/auth-stores';
import { ErrorResponse } from '../../api/types';
import { UserInfoResponse } from '../../api/user/types';
import { AxiosError } from 'axios';

export const useGetUserInfo = () => {
  const { isLoggedIn } = useAuthStore();

  return useQuery<UserInfoResponse, AxiosError<ErrorResponse>>({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info', isLoggedIn],
    enabled: isLoggedIn,
  });
};
