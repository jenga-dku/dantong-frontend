export type LoginInfo = {
  studentId: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
