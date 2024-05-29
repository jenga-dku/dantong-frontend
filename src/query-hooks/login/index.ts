import { useMutation } from '@tanstack/react-query';
import { Login } from '../../api/login';
import { LoginInfo } from '../../api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../api/types';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth-stores';
import { useGetUserInfo } from '../user';

export const usePostLoginInfo = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserInfo } = useAuthStore();
  const { data } = useGetUserInfo();
  return useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onSuccess: ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
      setUserInfo({
        name: data!.name,
        role: data!.userRole,
      });
      navigate('/');
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      alert(response?.data.message[0]),
  });
};
