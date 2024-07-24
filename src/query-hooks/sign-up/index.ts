import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { SignUp } from '@api/sign-up';
import { useSignUpInfoStore } from '@stores/signUpInfo-stores';
import { AxiosError } from 'axios';
import { Verification, VerificationResponse } from '@api/sign-up/types';
import { useNavigate } from 'react-router-dom';
import { ErrorResponse } from '@api/types';

export const usePostMail = (
  options?: UseMutationOptions<void, AxiosError, string>,
) => {
  return useMutation({
    mutationFn: (studentId: string) => SignUp.postMail(studentId),
    ...options,
  });
};

export const usePostVerificationCode = (
  options?: UseMutationOptions<
    VerificationResponse,
    AxiosError<ErrorResponse>,
    Verification
  >,
) => {
  return useMutation({
    mutationKey: ['verificationCode'],
    mutationFn: ({
      studentId,
      emailCode,
    }: {
      studentId: string;
      emailCode: string;
    }) =>
      SignUp.postVerificationCode({
        studentId,
        emailCode,
      }),
    onError: ({ response }) => alert(response?.data.message[0]),
    ...options,
  });
};

export const usePostSignUpInfo = () => {
  const { signUpInfo } = useSignUpInfoStore();
  const { signUpToken } = useSignUpInfoStore();
  const { studentId, password, name, phoneNumber, major } = signUpInfo;
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () =>
      SignUp.postSignUpInfo({
        signUpToken,
        signUpInfo: {
          studentId,
          password,
          name,
          phoneNumber,
          major,
        },
      }),
    onSuccess: () => {
      navigate('/sign-up/success');
    },
  });
};
