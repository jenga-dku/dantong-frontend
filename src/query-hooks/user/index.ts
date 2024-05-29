import { useQuery } from '@tanstack/react-query';
import { User } from '../../api/user';
import { isLoggedIn } from '../../utils/handleAuth';

export const useGetUserInfo = () =>
  useQuery({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info'],
    enabled: isLoggedIn,
  });
