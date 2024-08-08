import { Major } from '@src/types/major';

export type UserInfoResponse = {
  name: string;
  studentId: string;
  major: Major;
  phoneNumber: string;
  userRole: string;
};

export type ModifiedUserInfo = {
  name: string;
  major: string;
  phoneNumber: string;
};
