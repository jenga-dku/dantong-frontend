import { useNavigate } from 'react-router-dom';
import { ReactComponent as EmailVerificationIcon } from '../../../assets/svg/EmailVerification.svg';
import { Content } from '../Content';
import { Button } from '../../../components/Button';

export const MailVerification = () => {
  const navigate = useNavigate();

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
      <Button
        content="인증 완료"
        size="full"
        onClick={() => {
          navigate('/sign-up/info');
        }}
      />
    </>
  );
};
