import { Link, useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid h-full w-full grid-cols-1 items-end p-5">
      <div className="header mb-[-2rem] flex w-full flex-col items-center">
        <p className="font-SejongHospitalLight mb-3 text-lg leading-none text-primary">
          단국인을 위한 <br /> 학생회 소통 플랫폼
        </p>
        <h1 className="font-SejongHospitalBold text-center text-[3.5rem] text-primary">
          단통
        </h1>
      </div>
      <div className="mb-8 flex w-full flex-col gap-6 justify-self-end">
        <button
          onClick={() => {
            navigate('/sign-up/email');
          }}
          className="btn-primary"
        >
          시작하기
        </button>
        <Link to="/login" className="text-center text-sm text-[#bbb] underline">
          이미 계정이 있으신가요?
        </Link>
      </div>
    </div>
  );
};
