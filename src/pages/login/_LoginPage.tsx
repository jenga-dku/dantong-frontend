import { Button } from '../../components/Button';
import { Input } from './Input';
import { LoginInfo } from '../../api/login/types';
import { useEffect, useState } from 'react';
import { usePostLoginInfo } from '../../query-hooks/login';
import { useAuthStore } from '../../stores/auth-stores';

export const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    studentId: '',
    password: '',
  });
  const { mutate: postLoginInfo } = usePostLoginInfo();
  const { setIsLoggedIn } = useAuthStore();

  const submitLoginInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLoginInfo(loginInfo);
  };

  return (
    <div className="mt-[-5rem] flex w-full flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          submitLoginInfo(e);
        }}
        className="flex h-fit w-full flex-col items-center gap-5 p-5 text-[#C4C4C4]"
      >
        <h1 className="font-SejongHospitalBold text-4xl text-primary">단통</h1>
        <Input
          onChange={(e) => {
            setLoginInfo((prev) => ({ ...prev, studentId: e.target.value }));
          }}
          label="Student ID"
          maxLength={8}
        >
          <span>@dankook.ac.kr</span>
        </Input>
        <Input
          onChange={(e) => {
            setLoginInfo((prev) => ({ ...prev, password: e.target.value }));
          }}
          label="Password"
          type="password"
        />
        <Button size="full" content="로그인" />
      </form>
    </div>
  );
};
