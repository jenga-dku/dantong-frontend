import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { SignUp } from '@api/sign-up';
import { useSignUpInfoStore } from '@stores/signUpInfo-stores';
import { AxiosError } from 'axios';
import {
  DKULogin,
  DKULoginResponse,
  Verification,
  VerificationResponse,
} from '@api/sign-up/types';
import { useNavigate } from 'react-router-dom';
import { ErrorResponse } from '@api/types';
import { useLoadingModal } from '@/hooks/modal/useLoadingMoadl';
import { useModal } from '@/hooks/modal/useModal';
import { MAJOR_KOREAN, MajorKorean } from '@/types/major';

export const usePostDKULogin = () => {
  const navigate = useNavigate();
  const { setSignUpInfo, signUpInfo, setSignUpToken } = useSignUpInfoStore();
  const { openLoadingModal, closeLoadingModal } = useLoadingModal();
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: DKULogin) => SignUp.verify(data),
    onMutate: () => {
      openLoadingModal('학사정보를 불러오는 중...');
    },
    onSuccess: (res: DKULoginResponse) => {
      closeLoadingModal();
      setSignUpToken(res.signupToken);
      setSignUpInfo({
        ...signUpInfo,
        name: res.studentInfo.name,
        studentId: res.studentInfo.studentId,
        major:
          (MAJOR_KOREAN[res.studentInfo.majorName as MajorKorean] as string) ??
          '',
      });
      navigate('/sign-up/info');
    },
    onError: () => {
      open({ title: '오류', desc: '입력 정보를 다시 확인해주세요.' });
    },
  });
};

export const usePostMail = (
  options?: UseMutationOptions<void, AxiosError, string>,
) => {
  return useMutation({
    mutationFn: (studentId: string) => SignUp.postMail(studentId),
    onSuccess: () => {
      console.log('성공');
    },
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
