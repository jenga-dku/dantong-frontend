import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@api/types';
import { useModal } from '@/hooks/modal/useModal';
import { useNavigate } from 'react-router-dom';
import { NewsUpload } from '@api/news-upload/types';
import { News } from '@api/news-upload';

export const usePostNews = () => {
  const { open } = useModal();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: NewsUpload) => News.post(data),
    onSuccess: () => {
      navigate('/news');
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};
