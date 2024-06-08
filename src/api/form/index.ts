import { getToken } from '../../utils/handleAuth';
import { API } from '../api';
import { FormAnswer, FormResponse } from './types';

export const Form = {
  async get(id: number): Promise<FormResponse> {
    const response = await API.get(`/survey/${id}`);
    return response.data;
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
};
