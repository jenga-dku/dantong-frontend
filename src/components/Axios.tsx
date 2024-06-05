import { AxiosError } from 'axios';
import { API } from '../api/api';
import { ErrorResponse } from '../api/types';
import { removeToken } from '../utils/handleAuth';
import { useModal } from '../hooks/useModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from '../stores/auth-stores';

export const Axios = () => {
  const { open } = useModal();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setIsLoggedIn, setUserInfo } = useAuthStore();

  API.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error: AxiosError<ErrorResponse>) {
      const code = error.code;
      const status = error.response?.status;
      if (
        error.response?.data.message[0] === 'TOKEN_EXPIRED' ||
        error.response?.data.message[0] === 'TOKEN_NOT_VALIDATED'
      ) {
        removeToken();
        pathname !== '/login' &&
          open({
            title: '토큰이 만료되었습니다.',
            option: {
              type: 'CONFIRM',
              confirmEvent: () => {
                setIsLoggedIn(false);
                setUserInfo({
                  name: '',
                  role: '',
                  studentID: '',
                });
                navigate('/login');
              },
            },
          });
        return error;
      }

      return Promise.reject(error);
    },
  );
  return <></>;
};
