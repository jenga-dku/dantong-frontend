import { useQuery } from '@tanstack/react-query';
import { User } from '../../api/user';
import { useAuthStore } from '../../stores/auth-stores';

export const useGetUserInfo = () => {
  const { isLoggedIn } = useAuthStore();
  return useQuery({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info'],
    enabled: isLoggedIn,
  });
};
