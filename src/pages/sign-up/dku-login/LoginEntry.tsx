import { DKULogin } from '@/api/sign-up/types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { usePostDKULogin } from '@/query-hooks/sign-up';
import { setInputChange } from '@/utils/setInputChange';
import { useState } from 'react';

export const AccountEntry = () => {
  const [loginInfo, setLoginInfo] = useState<DKULogin>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChange(e, setLoginInfo);
  };
  const { mutate: postLogin } = usePostDKULogin();

  const handleDKULogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginInfo) postLogin(loginInfo);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleDKULogin}>
      <Input
        name="dkuId"
        type="text"
        background="#e6e6e6"
        placeholder="학번을 입력해주세요."
        onChange={handleInputChange}
        shadow
      />
      <Input
        name="dkuPassword"
        type="password"
        background="#e6e6e6"
        placeholder="비밀번호를 입력해주세요."
        onChange={handleInputChange}
        shadow
      />
      <Button content="인증하기" />
    </form>
  );
};
