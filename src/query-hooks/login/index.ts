import { useMutation } from '@tanstack/react-query';
import { Login } from '../../api/login';
import { LoginInfo } from '../../api/login/types';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../api/types';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth-stores';
import { useGetUserInfo } from '../user';
import { useModal } from '../../hooks/useModal';
import { useEffect } from 'react';

export const usePostLoginInfo = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userInfo, setIsLoggedIn, setUserInfo } = useAuthStore();
  const { data: fetchedUserInfo, isSuccess: isUserInfoFetchedSuccess } =
    useGetUserInfo();
  const { open } = useModal();

  useEffect(() => {
    console.log(isLoggedIn && isUserInfoFetchedSuccess);
    isLoggedIn &&
      isUserInfoFetchedSuccess &&
      setUserInfo({
        name: fetchedUserInfo!.name,
        role: fetchedUserInfo!.userRole,
        studentID: fetchedUserInfo!.studentId,
      });
  }, [isLoggedIn]);

  useEffect(() => {
    userInfo.name && userInfo.name.length > 0 && navigate('/');
  }, [userInfo.name]);

  return useMutation({
    mutationFn: (data: LoginInfo) => Login.post(data),
    onSuccess: ({ accessToken, refreshToken }) => {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setIsLoggedIn(true);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '로그인 오류',
        desc: response?.data.message[0],
      }),
  });
};
