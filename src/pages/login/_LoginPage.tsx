import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from './Input';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-[-5rem] flex w-full flex-col items-center justify-center">
      <div className="flex h-fit w-full flex-col items-center gap-5 p-5 text-[#C4C4C4]">
        <h1 className="font-SejongHospitalBold text-4xl text-primary">단통</h1>
        <Input label="Student ID" maxLength={8}>
          <span>@dankook.ac.kr</span>
        </Input>
        <Input label="Password" type="password" />
        <Button
          size="full"
          onClick={() => {
            navigate('/');
          }}
          content="로그인"
        />
      </div>
    </div>
  );
};
