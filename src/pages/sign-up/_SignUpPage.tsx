import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SignUpLayout } from './SignUpLayout';
import { MailEntryPage } from './email/_MailEntryPage';
import { useEffect, useState } from 'react';
import { InfoEntryPage } from './info/_InfoEntryPage';
import { PasswordEntryPage } from './password/_PasswordEntryPage';
import { SignUpSuccessPage } from './success/_SignUpSuccessPage';

export const SignUpPage = () => {
  const [step, setStep] = useState(0);
  const { pathname } = useLocation();
  const steps = ['email', 'info', 'password', 'success'];
  const navigate = useNavigate();

  useEffect(() => {
    const pageName = pathname.split('?')[0].split('/sign-up/')[1];
    setStep(steps.findIndex((item) => item === pageName));
  }, [pathname]);

  return (
    <SignUpLayout step={step}>
      <MailEntryPage />
      <InfoEntryPage onNext={() => navigate('/sign-up/password')} />
      <PasswordEntryPage
        onNext={() => {
          navigate('/sign-up/success');
        }}
      />
      <SignUpSuccessPage onNext={() => navigate('/login')} />
      <Outlet />
    </SignUpLayout>
  );
};
