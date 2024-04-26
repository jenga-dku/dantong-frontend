import { ReactComponent as EmailVerificationIcon } from '../../../assets/svg/EmailVerification.svg';

export const EmailVerification = () => {
  return (
    <>
      <div className="mt-[-50px] w-full">
        <p className="font-SejongHospitalBold mb-6 text-xl leading-[1.2] text-primary">
          메일 전송 완료 !
          <br />
          인증 메일을 확인해주세요
        </p>
        <div className="flex w-full justify-center">
          <EmailVerificationIcon width={300} />
        </div>
      </div>
      <button className="btn-primary" onClick={() => {}}>
        인증하기
      </button>
    </>
  );
};
