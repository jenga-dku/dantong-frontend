import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { SignUp } from '../../api/sign-up';
import { useSignUpInfoStore } from '../../stores/signUpInfo-stores';
import { AxiosError } from 'axios';
import { Verification, VerificationResponse } from '../../api/sign-up/types';
import { useNavigate } from 'react-router-dom';

export const usePostMail = (
  options?: UseMutationOptions<void, AxiosError, string>,
) => {
  return useMutation({
    mutationFn: (studentID: string) => SignUp.postMail(studentID),
    ...options,
  });
};

export const usePostVerificationCode = (
  options?: UseMutationOptions<VerificationResponse, AxiosError, Verification>,
) => {
  const { setSignUpToken } = useSignUpInfoStore();
  const navigate = useNavigate();
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
    onSuccess: (res: VerificationResponse) => {
      setSignUpToken(res.signupToken);
      navigate('?isMailSent=true');
    },
    ...options,
  });
};

export const usePostSignUpInfo = () => {
  const { signUpInfo } = useSignUpInfoStore();
  const { signUpToken } = useSignUpInfoStore();
  const { studentID, password, name, phoneNumber, major } = signUpInfo;
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () =>
      SignUp.postSignUpInfo({
        signUpToken,
        signUpInfo: {
          studentId: studentID,
          password: password,
          name: name,
          phoneNumber: phoneNumber,
          major: major,
        },
      }),
    onSuccess: () => {
      navigate('/sign-up/success');
    },
  });
};
