import { getToken } from '@utils/handleAuth';
import { API } from '@api/api';
import { PageParams } from '../types';
import {
  AllUsersReplyResponse,
  FormAnswer,
  FormListItem,
  FormResponse,
  MySubmitResponse,
} from './types';

export const Form = {
  async get(Id: number): Promise<FormResponse> {
    const response = await API.get(`/survey/${Id}`);
    return response.data;
  },
  async getInfiniteFormList({
    page,
    size,
  }: PageParams): Promise<FormListItem[]> {
    const response = await API.get(
      `/survey/admin/surveys?page=${page}&size=${size}&sort=createdAt,desc`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    const list = (await response.data.content) as FormListItem[];
    return list;
  },
  async submit(formId: number, answerList: FormAnswer[]) {
    const response = await API.post(
      '/submit',
      {
        surveyId: formId,
        replyRequest: answerList,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    return response.data;
  },
  async getAnswerListOfQuestion(questionId: number): Promise<FormAnswer[]> {
    const response = await API.get(`/reply/${questionId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
  async getInfiniteMyFormList({
    page,
    size,
  }: PageParams): Promise<FormListItem[]> {
    const response = await API.get(
      `/reply/user?page=${page}&size=${size}&sort=createdAt,desc`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    const list = (await response.data.content) as FormListItem[];
    return list;
  },
  async getMyAnswer(questionId: number): Promise<FormAnswer> {
    const response = await API.get(`/reply/user/${questionId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
  async getAllUsersReply(formId: number): Promise<AllUsersReplyResponse[]> {
    const response = await API.get(`/reply/all/${formId}`);
    return response.data;
  },
  async getMySubmit(formId: number): Promise<MySubmitResponse> {
    const response = await API.get(`/submit/user/${formId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
};
