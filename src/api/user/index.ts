import { API } from '../api';
import { UserInfoResponse } from './types';

export const User = {
  async getUserInfo(): Promise<UserInfoResponse> {
    const response = await API.get(`/user`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IlJPTEVfR1VFU1QiLCJleHAiOjE3MTcwNDcwNTMsInVzZXJJZCI6IjEiLCJpYXQiOjE3MTY5NjA2NTN9.8YHSZjdQpRv01mz7IqGJFwQvDGcekEECoNcjUTuJ0fs',
      },
    });
    return response.data;
  },
};
