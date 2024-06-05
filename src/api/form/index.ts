import { getToken } from '../../utils/handleAuth';
import { API } from '../api';
import { FormAnswer, FormResponse } from './types';

export const Form = {
  async get(id: number): Promise<FormResponse> {
    const response = await API.get(`/survey/${id}`);
    return response.data;
  },
  async submit(answer: FormAnswer[]) {
    const response = await API.post('/reply', answer, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
};
