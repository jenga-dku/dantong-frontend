import { UserInfoResponse } from '../user/types';

export type NotificationRegister = {
  studentId: UserInfoResponse['studentId'];
  token: string;
};
