import { useMutation } from '@tanstack/react-query';
import { Login } from '../../api/login';
import { LoginInfo } from '../../api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../api/types';
import { useNavigate } from 'react-router-dom';

export const usePostLoginInfo = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onSuccess: ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/');
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      alert(response?.data.message[0]),
  });
};
