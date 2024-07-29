import { Button } from '@components/ui/Button';
import { LoginInfo } from '@api/login/types';
import { useState } from 'react';
import { usePostLoginInfo } from '@query-hooks/login';
import { setInputChange } from '@/utils/setInputChange';
import { Input } from './Input';

export const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    studentId: '',
    password: '',
  });
  const { mutate: postLoginInfo } = usePostLoginInfo();

  const submitLoginInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLoginInfo(loginInfo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChange(e, setLoginInfo);
  };

  return (
    <div className="mt-[-5rem] flex w-full flex-col items-center justify-center">
      <form
        onSubmit={submitLoginInfo}
        className="flex h-fit w-full flex-col items-center gap-5 p-5 text-[#C4C4C4]"
      >
        <h1 className="font-SejongHospitalBold text-4xl text-primary">단통</h1>
        <Input
          label="Student ID"
          name="studentId"
          maxLength={8}
          onChange={handleInputChange}
          inputContent={<span>@dankook.ac.kr</span>}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <Button size="full" content="로그인" />
      </form>
    </div>
  );
};
