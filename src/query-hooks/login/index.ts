import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Login } from '@api/login';
import { LoginInfo } from '@api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@api/types';
import { useAuthStore } from '@stores/auth-stores';
import { useModal } from '@hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { UserInfoResponse } from '@/api/user/types';

export const usePostLoginInfo = () => {
  const { setIsLoggedIn, setUserInfo, isLoggedIn } = useAuthStore();
  const { open } = useModal();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onSuccess: async ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) => {
      open({
        title: '로그인 오류',
        desc: response?.data.message[0],
      });
    },
    onSettled: async () => {
      if (isLoggedIn) {
        await queryClient
          .refetchQueries({ queryKey: ['user-info'] })
          .then(() => {
            const { name, userRole, studentId }: UserInfoResponse =
              queryClient.getQueryData(['user-info', isLoggedIn])!;
            setUserInfo({
              name: name,
              role: userRole,
              studentID: studentId,
            });
          })
          .finally(() => navigate('/'));
      }
    },
  });
};
