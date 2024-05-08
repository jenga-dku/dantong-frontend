import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SignUp } from '../../api/sign-up';

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
