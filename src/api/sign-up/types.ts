import { Major } from '@/types/major';

export type SignUpInfo = {
  studentId: string;
  password: string;
  name: string;
  phoneNumber: string;
  major: string;
};

export type Verification = {
  studentId: string;
  emailCode: string;
};

export type VerificationResponse = {
  studentId: string;
  signupToken: string;
};

export type DKULogin = {
  dkuId: string;
  dkuPassword: string;
};

export type DKULoginResponse = {
  signupToken: string;
  studentInfo: {
    name: string;
    studentId: string;
    majorName: string;
    departmentName: string;
  };
};
