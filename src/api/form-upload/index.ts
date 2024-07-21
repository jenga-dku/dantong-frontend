import { API } from '@api/api';
import { FormUpload } from './types';
import { getToken } from '@utils/handleAuth';

export const Form = {
  async create(form: FormUpload) {
    const response = await API.post('/survey', form, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  },
};
