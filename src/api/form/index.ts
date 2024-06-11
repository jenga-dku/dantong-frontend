import { getToken } from '../../utils/handleAuth';
import { API } from '../api';
import { PageParams } from '../types';
import { FormAnswer, FormListItem, FormResponse } from './types';

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
    const postList = (await response.data.content) as FormListItem[];
    return postList;
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
};
