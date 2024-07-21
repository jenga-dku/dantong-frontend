import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@api/types';
import { useModal } from '@hooks/useModal';
import { Form } from '@api/form-upload';
import { FormUpload } from '@api/form-upload/types';
import { useNavigate } from 'react-router-dom';

export const useCreateForm = () => {
  const { open } = useModal();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: FormUpload) => Form.create(data),
    onSuccess: ({ surveyId }) => {
      navigate(`/form/${surveyId}`);
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};
