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
