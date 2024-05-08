import { post } from '../api';

export const SignUp = {
  async postMail(studentID: string) {
    await post('/user/email', { studentId: studentID });
  },
};
