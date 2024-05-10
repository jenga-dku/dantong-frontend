import { create } from 'zustand';

export type SignUpInfoKey =
  | 'name'
  | 'studentID'
  | 'phoneNumber'
  | 'major'
  | 'password'
  | 'passwordCheck';

export type SignUpInfo = {
  name: string;
  studentID: string;
  phoneNumber: string;
  major: string;
  password: string;
  passwordCheck: string;
};

type SignUpInfoState = {
  signUpToken: string;
  signUpInfo: SignUpInfo;
  activatedInputIndex: {
    info: number;
    password: number;
  };
  setSignUpInfo: (state: SignUpInfo) => void;
  setSignUpToken: (token: string) => void;
  setActivatedInputIndex: (state: { info: number; password: number }) => void;
};

export const useSignUpInfoStore = create<SignUpInfoState>((set) => ({
  signUpToken: '',
  signUpInfo: {
    name: '',
    studentID: '',
    phoneNumber: '',
    major: '',
    password: '',
    passwordCheck: '',
  },
  activatedInputIndex: {
    info: 0,
    password: 0,
  },
  setSignUpToken: (token: string) => set({ signUpToken: token }),
  setSignUpInfo: (state: SignUpInfo) => set({ signUpInfo: state }),
  setActivatedInputIndex: (state: { info: number; password: number }) =>
    set({ activatedInputIndex: state }),
}));
