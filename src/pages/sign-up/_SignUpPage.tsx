import { Outlet, useLocation } from 'react-router-dom';
import { SignUpLayout } from './SignUpLayout';
import { MailEntryPage } from './email/_MailEntryPage';
import { useEffect, useState } from 'react';
import { InfoEntryPage } from './info/_InfoEntryPage';
import { PasswordEntryPage } from './password/_PasswordEntryPage';

export type signUpInfo = {
  1: { mail: string };
  2: { name: string; studentID: string; phoneNumber: string; major: string };
};

export const SignUpPage = () => {
  const { pathname } = useLocation();
  const [pageIndex, setpageIndex] = useState(-1);
  const [signUpInfo, setSignUpInfo] = useState<signUpInfo>({
    1: { mail: '' },
    2: { name: '', studentID: '', phoneNumber: '', major: '' },
  });

  useEffect(() => {
    setpageIndex((prev) => prev + 1);
  }, [pathname]);

  return (
    <SignUpLayout pageIndex={pageIndex}>
      <MailEntryPage updateState={setSignUpInfo} />
      <InfoEntryPage updateState={setSignUpInfo} />
      <PasswordEntryPage />
      <Outlet />
    </SignUpLayout>
  );
};
