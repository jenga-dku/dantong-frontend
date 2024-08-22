import { AxiosError } from 'axios';
import { API } from '@api/api';
import { ErrorResponse } from '@api/types';
import useAuth from '@/hooks/useAuth';
import toast, { useToasterStore } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Axios = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toasts } = useToasterStore();
  const TOAST_MAX_SIZE = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_MAX_SIZE)
      .forEach((t) => toast.dismiss(t.id));
  }, [toast]);

  API.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    config.headers['Authorization'] = !!accessToken
      ? `Bearer ${accessToken}`
      : null;
    return config;
  });
  API.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error: AxiosError<ErrorResponse>) {
      const status = error.response?.status;
      if (status === 401) {
        toast('다시 로그인해주세요');
        logout();
        navigate('/login');
        return error;
      }
      return Promise.reject(error);
    },
  );
  return <></>;
};
