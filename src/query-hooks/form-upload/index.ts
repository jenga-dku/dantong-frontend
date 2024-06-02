import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from '../../api/types';
import { useModal } from '../../hooks/useModal';
import { Form } from '../../api/form-upload';
import { FormUpload } from '../../api/form-upload/types';

export const useCreateForm = () => {
  const { open } = useModal();

  return useMutation({
    mutationFn: (data: FormUpload) => Form.create(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};
