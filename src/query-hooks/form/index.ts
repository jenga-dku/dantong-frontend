import { useMutation, useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '../../api/types';
import { useModal } from '../../hooks/useModal';
import { FormAnswer } from '../../api/form/types';
import { AxiosError } from 'axios';
import { Form } from '../../api/form';

export const useGetForm = (id: number) =>
  useQuery({
    queryFn: () => Form.get(id),
    queryKey: ['form'],
  });

export const useSubmitForm = () => {
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: FormAnswer[]) => Form.submit(data),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};
