import { useEffect, useState } from 'react';
import { SignUpLayout } from '../SignUpLayout';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';
import { useSearchParams } from 'react-router-dom';

export const MailEntryPage = () => {
  const [isMailSended, setIsMailSended] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsMailSended(searchParams.get('isMailSended') === 'true' ?? false);
  }, [searchParams]);

  return (
    <SignUpLayout>
      {!isMailSended ? <MailEntry /> : <MailVerification />}
    </SignUpLayout>
  );
};
