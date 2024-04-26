import { useEffect, useState } from 'react';
import { SignUpLayout } from '../SignUpLayout';
import { EmailEntry } from './EmailEntry';
import { EmailVerification } from './EmailVerification';
import { useSearchParams } from 'react-router-dom';

export const EmailEntryPage = () => {
  const [isMailSended, setIsMailSended] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsMailSended(searchParams.get('isMailSended') === 'true' ?? false);
  }, [searchParams]);

  return (
    <SignUpLayout>
      {!isMailSended ? <EmailEntry /> : <EmailVerification />}
    </SignUpLayout>
  );
};
