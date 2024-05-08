import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SignUpLayout } from './SignUpLayout';
import { MailEntryPage } from './email/_MailEntryPage';
import { useEffect, useState } from 'react';
import { InfoEntryPage } from './info/_InfoEntryPage';
import { PasswordEntryPage } from './password/_PasswordEntryPage';
import { SignUpSuccessPage } from './success/_SignUpSuccessPage';
import { usePostSignUpInfo } from '../../query-hooks/sign-up';

export const SignUpPage = () => {
  const [step, setStep] = useState(0);
  const { pathname } = useLocation();
  const steps = ['email', 'info', 'password', 'success'];
  const navigate = useNavigate();
  const { mutate: postSignUpInfo } = usePostSignUpInfo('signUpToken'); // TODO: 토큰 넣어야 함

  useEffect(() => {
    const pageName = pathname.split('?')[0].split('/sign-up/')[1];
    setStep(steps.findIndex((item) => item === pageName));
  }, [pathname]);

  const submitSignUpInfo = () => {
    postSignUpInfo();
  };

  return (
    <SignUpLayout step={step}>
      <MailEntryPage />
      <InfoEntryPage onNext={() => navigate('/sign-up/password')} />
      <PasswordEntryPage
        onNext={() => {
          submitSignUpInfo();
        }}
      />
      <SignUpSuccessPage onNext={() => navigate('/login')} />
      <Outlet />
    </SignUpLayout>
  );
};
