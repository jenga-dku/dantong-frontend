import { useState } from 'react';
import { Button } from '../../../components/Button';
import { Content } from '../Content';

type passwordInfo = {
  password: string;
  passwordCheck: string;
};

type passwordInfoInputAttr = {
  id: 'password' | 'passwordCheck';
  korName: string;
};

export const PasswordEntryPage = () => {
  const [userInfo, setUserInfo] = useState<passwordInfo>({
    password: '',
    passwordCheck: '',
  });

  return (
    <>
      <Content
        message="비밀번호를 입력해주세요"
        subMessage="영문자와 특수문자를 조합하여\n8자 이상의 비밀번호를 입력해주세요"
      />
      <Button content="확인" size="full" onClick={() => {}} />
    </>
  );
};
