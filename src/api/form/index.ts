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
  async get(id: number): Promise<FormResponse> {
    const response = await API.get(`/survey/${id}`);
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
  async submit(formID: number, answerList: FormAnswer[]) {
    const response = await API.post(
      '/submit',
      {
        surveyId: formID,
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
  async getAnswerListOfQuestion(questionID: number): Promise<FormAnswer[]> {
    const response = await API.get(`/reply/${questionID}`, {
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
  async getMyAnswer(questionID: number): Promise<FormAnswer> {
    const response = await API.get(`/reply/user/${questionID}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
  async getAllUsersReply(formID: number): Promise<AllUsersReplyResponse[]> {
    const response = await API.get(`/reply/all/${formID}`);
    return response.data;
  },
  async getMySubmit(formID: number): Promise<MySubmitResponse> {
    const response = await API.get(`/submit/user/${formID}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
};
