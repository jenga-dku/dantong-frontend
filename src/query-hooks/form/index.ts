import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '@api/types';
import { useModal } from '@/hooks/modal/useModal';
import { FormAnswer } from '@api/form/types';
import { AxiosError } from 'axios';
import { Form } from '@api/form';
import { useNavigate } from 'react-router-dom';

export const useGetForm = (id: number) =>
  useQuery({
    queryFn: () => Form.get(id),
    queryKey: ['form'],
    gcTime: 0,
  });

export const useSubmitForm = () => {
  const { open } = useModal();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({
      formId,
      answerList,
    }: {
      formId: number;
      answerList: FormAnswer[];
    }) => Form.submit(formId, answerList),
    onSuccess: () => {
      navigate('/news');
      open({ title: '폼 제출 완료', desc: '폼이 성공적으로 제출되었습니다.' });
    },
    onError: ({ response }: AxiosError<ErrorResponse>) =>
      open({
        title: '오류',
        desc: response?.data.message[0],
      }),
  });
};

export const useGetInfiniteFormList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['infiniteFormList'],
    queryFn: ({ pageParam: pageNum }) =>
      Form.getInfiniteFormList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });

export const useGetAnswerListOfQuestion = (questionId: number) =>
  useQuery({
    queryFn: () => Form.getAnswerListOfQuestion(questionId),
    queryKey: [`question-${questionId}`, { questionId }],
    gcTime: 0,
  });

export const useGetInfiniteMyFormList = ({ size }: { size: number }) =>
  useInfiniteQuery({
    queryKey: ['infiniteMyFormList'],
    queryFn: ({ pageParam: pageNum }) =>
      Form.getInfiniteMyFormList({ page: pageNum, size }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    gcTime: 0,
  });

export const useGetMyAnswer = (questionId: number) =>
  useQuery({
    queryFn: () => Form.getMyAnswer(questionId),
    queryKey: [`answer-${questionId}`, { questionId }],
    gcTime: 0,
  });

export const useGetAllUsersReply = (formId: number) =>
  useQuery({
    queryFn: () => Form.getAllUsersReply(formId),
    queryKey: [`all-users-answer-${formId}`, { formId }],
    gcTime: 0,
  });

export const useGetMySubmit = (formId: number) =>
  useQuery({
    queryFn: () => Form.getMySubmit(formId),
    queryKey: [`my-submit-${formId}`, { formId }],
    gcTime: 0,
  });
