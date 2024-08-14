import { AxiosError } from 'axios';
import { API } from '@api/api';
import { ErrorResponse } from '@api/types';

export const Axios = () => {
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
    // function (error: AxiosError<ErrorResponse>) {
    //   const code = error.code;
    //   const status = error.response?.status;
    //   if (
    //     error.response?.data.message[0] === 'TOKEN_EXPIRED' ||
    //     error.response?.data.message[0] === 'TOKEN_NOT_VALIDATED'
    //   ) {
    //     return error;
    //   }
    //   return Promise.reject(error);
    // },
  );
  return <></>;
};
