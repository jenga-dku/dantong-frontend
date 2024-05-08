import { useMutation } from '@tanstack/react-query';
import { Login } from '../../api/login';
import { LoginInfo } from '../../api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../api/types';

export const usePostLoginInfo = () =>
  useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onSuccess: (res) => console.log(res.data),
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      alert(response?.data.message[0]),
  });
