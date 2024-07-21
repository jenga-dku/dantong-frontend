import { useNavigate } from 'react-router-dom';
import { ReactComponent as EmailVerificationIcon } from '@assets/svg/EmailVerification.svg';
import { Content } from '../_components/Content';
import { Button } from '@components/Button';

export const MailVerification = () => {
  const navigate = useNavigate();

  return (
    <>
      <Content
        message="재학 인증 완료!\n다음 페이지로 이동해주세요."
        content={
          <div className="flex w-full justify-center">
            <EmailVerificationIcon width={300} />
          </div>
        }
      />
      <Button
        content="다음"
        size="full"
        onClick={() => {
          navigate('/sign-up/info');
        }}
      />
    </>
  );
};
