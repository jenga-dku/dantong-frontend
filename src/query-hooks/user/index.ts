import { useQuery } from '@tanstack/react-query';
import { User } from '../../api/user';

export const useGetUserInfo = () =>
  useQuery({
    queryFn: () => User.getUserInfo(),
    queryKey: ['user-info'],
  });
