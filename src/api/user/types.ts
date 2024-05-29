import { Major } from '../../types/major';

export type UserInfoResponse = {
  name: string;
  studentId: string;
  majorName: Major;
  phoneNumber: string;
  userRole: string;
};
