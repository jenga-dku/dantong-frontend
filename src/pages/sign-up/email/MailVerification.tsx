import { ReactComponent as EmailVerificationIcon } from '../../../assets/svg/EmailVerification.svg';
import { Content } from '../Content';

export const MailVerification = () => {
  return (
    <>
      <Content
        message="메일 전송 완료 !\n인증 메일을 확인해주세요"
        content={
          <div className="flex w-full justify-center">
            <EmailVerificationIcon width={300} />
          </div>
        }
      />

      <button className="btn-primary" onClick={() => {}}>
        인증하기
      </button>
    </>
  );
};
