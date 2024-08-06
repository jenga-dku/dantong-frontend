import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Login } from '@api/login';
import { LoginInfo } from '@api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@api/types';
import { useAuthStore } from '@stores/auth-stores';
import { useModal } from '@/hooks/modal/useModal';
import { useNavigate } from 'react-router-dom';
import { useLoadingModal } from '@/hooks/modal/useLoadingMoadl';
import { useEffect } from 'react';
import { useGetUserInfo } from '../user';

export const usePostLoginInfo = () => {
  const { setIsLoggedIn, setUserInfo, isLoggedIn, setIsTokenIssued } =
    useAuthStore();
  const { open } = useModal();
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: userInfo } = useGetUserInfo();

  useEffect(() => {
    userInfo &&
      setUserInfo({
        name: userInfo.name,
        role: userInfo.userRole,
        studentId: userInfo.studentId,
      });
  }, [userInfo]);

  return useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onMutate: () => {
      openLoadingModal('로그인 중');
    },
    onSuccess: ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('tokenDate', JSON.stringify(new Date()));
      setIsLoggedIn(true);
      setIsTokenIssued(true);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) => {
      closeLoadingModal();
      open({
        title: '로그인 오류',
        desc: response?.data.message[0],
      });
    },
    onSettled: async () => {
      if (isLoggedIn) {
        return await queryClient
          .invalidateQueries({
            queryKey: ['user-info', true],
          })
          .then(() => {
            closeLoadingModal();
            navigate('/');
          });
      }
    },
  });
};
