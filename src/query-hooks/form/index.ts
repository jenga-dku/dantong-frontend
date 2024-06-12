import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { ErrorResponse } from '../../api/types';
import { useModal } from '../../hooks/useModal';
import { FormAnswer } from '../../api/form/types';
import { AxiosError } from 'axios';
import { Form } from '../../api/form';
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
      formID,
      answerList,
    }: {
      formID: number;
      answerList: FormAnswer[];
    }) => Form.submit(formID, answerList),
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

export const useGetAnswerListOfQuestion = (questionID: number) =>
  useQuery({
    queryFn: () => Form.getAnswerListOfQuestion(questionID),
    queryKey: [`question-${questionID}`, { questionID }],
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

export const useGetMyAnswer = (questionID: number) =>
  useQuery({
    queryFn: () => Form.getMyAnswer(questionID),
    queryKey: [`answer-${questionID}`, { questionID }],
    gcTime: 0,
  });

export const useGetAllUsersReply = (formID: number) =>
  useQuery({
    queryFn: () => Form.getAllUsersReply(formID),
    queryKey: [`all-users-answer-${formID}`, { formID }],
    gcTime: 0,
  });

export const useGetMySubmit = (formID: number) =>
  useQuery({
    queryFn: () => Form.getMySubmit(formID),
    queryKey: [`my-submit-${formID}`, { formID }],
    gcTime: 0,
  });
