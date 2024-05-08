import { post } from '../api';
import { SignUpInfo } from './types';

export const SignUp = {
  async postMail(studentID: string) {
    await post('/user/email', { studentId: studentID });
  },
  async postSignUpInfo({
    signUpToken,
    signUpInfo,
  }: {
    signUpToken: string;
    signUpInfo: SignUpInfo;
  }) {
    await post(`/user/signup/${signUpToken}`, signUpInfo);
  },
};
