import { API } from '../api';
import { FormUpload } from './types';

export const Form = {
  async create(form: FormUpload) {
    const response = await API.post('/survey', form);
    return response.data;
  },
};
