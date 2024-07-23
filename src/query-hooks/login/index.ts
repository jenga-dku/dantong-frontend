import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Login } from '@api/login';
import { LoginInfo } from '@api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@api/types';
import { useAuthStore } from '@stores/auth-stores';
import { useModal } from '@/hooks/modal/useModal';
import { useNavigate } from 'react-router-dom';
import { UserInfoResponse } from '@/api/user/types';
import { useLoadingModal } from '@/hooks/modal/useLoadingMoadl';

export const usePostLoginInfo = () => {
  const { setIsLoggedIn, setUserInfo, isLoggedIn } = useAuthStore();
  const { open } = useModal();
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onMutate: () => {
      openLoadingModal('로그인 중');
    },
    onSuccess: ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
      console.log('성공');
    },
    onError: async ({ response }: AxiosError<ErrorResponse>) => {
      closeLoadingModal();

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
          .finally(() => {
            closeLoadingModal();
            navigate('/');
          });
      }
    },
  });
};
