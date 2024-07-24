type PasswordInputAttr = {
  id: 'password' | 'passwordCheck';
  korName: string;
  type: string;
};

export const passwordInputAttrList: PasswordInputAttr[] = [
  { id: 'password', korName: '비밀번호', type: 'password' },
  { id: 'passwordCheck', korName: '비밀번호 확인', type: 'password' },
];
