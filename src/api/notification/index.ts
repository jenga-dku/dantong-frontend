import { API } from '@api/api';
import { NotificationRegister } from './types';

export const Notification = {
  async register(data: NotificationRegister): Promise<string> {
    const response = await API.post(`/notification/register`, data);
    return response.data;
  },
  async send(): Promise<string> {
    const response = await API.post(`/notification/send`, null);
    return response.data;
  },
};
