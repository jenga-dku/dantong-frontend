import { useLocation, useNavigate } from 'react-router-dom';
import { SignUpLayout } from './SignUpLayout';
// import { MailEntryPage } from './email/_MailEntryPage';
import { useEffect, useState } from 'react';
import { InfoEntryPage } from './info/_InfoEntryPage';
import { PasswordEntryPage } from './password/_PasswordEntryPage';
import { SignUpSuccessPage } from './success/_SignUpSuccessPage';
import { usePostSignUpInfo } from '@query-hooks/sign-up';
import { DKULoginPage } from './dku-login/_DKU_Login_Page';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { mutate: postSignUpInfo } = usePostSignUpInfo();
  const { pathname } = useLocation();
  const [step, setStep] = useState(0);
  const steps = ['dku', 'info', 'password', 'success'];

  useEffect(() => {
    const pageName = pathname.split('?')[0].split('/sign-up/')[1];
    setStep(steps.findIndex((item) => item === pageName));
  }, [pathname]);

  const submitSignUpInfo = () => {
    postSignUpInfo();
  };

  return (
    <SignUpLayout step={step}>
      <DKULoginPage />
      {/* <MailEntryPage /> */}
      <InfoEntryPage onNext={() => navigate('/sign-up/password')} />
      <PasswordEntryPage onNext={submitSignUpInfo} />
      <SignUpSuccessPage onNext={() => navigate('/login')} />
    </SignUpLayout>
  );
};
