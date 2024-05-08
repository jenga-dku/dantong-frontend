import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SignUp } from '../../api/sign-up';
import { useSignUpInfoStore } from '../../stores/signUpInfo-stores';

export const usePostMail = (studentID: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => SignUp.postMail(studentID),
    onSuccess: (response) => {
      console.log(response);
    },
    throwOnError: true,
  });
};

export const usePostSignUpInfo = (signUpToken: string) => {
  const { signUpInfo } = useSignUpInfoStore();
  const { studentID, password, name, phoneNumber, major } = signUpInfo;
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
    onSuccess: (response) => {
      console.log(response);
    },
    throwOnError: true,
  });
};
