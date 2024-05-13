import { API } from '../api';
import { FormResponse } from './types';

export const Form = {
  async getForm(id: number): Promise<FormResponse> {
    const response = await API.get(`/survey/{surveyId}?surveyId=${id}`);
    return response.data;
  },
};
