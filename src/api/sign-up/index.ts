import { API } from '@api/api';
import { SignUpInfo, VerificationResponse } from './types';

export const SignUp = {
  async postMail(studentId: string) {
    const response = await API.post('/user/email', { studentId: studentId });
    return response.data;
  },
  async postVerificationCode({
    studentId,
    emailCode,
  }: {
    studentId: string;
    emailCode: string;
  }): Promise<VerificationResponse> {
    const response = await API.post('/user/email/verify', {
      studentId,
      emailCode,
    });
    return response.data;
  },
  async postSignUpInfo({
    signUpToken,
    signUpInfo,
  }: {
    signUpToken: string;
    signUpInfo: SignUpInfo;
  }) {
    const response = await API.post(`/user/signup/${signUpToken}`, signUpInfo);
    return response.data;
  },
};
