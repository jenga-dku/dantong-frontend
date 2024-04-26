import { useEffect, useState } from 'react';
import { SignUpLayout } from '../SignUpLayout';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const MailEntryPage = () => {
  const [isMailSended, setIsMailSended] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mail, setMail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    mail.length === 0 && navigate('/sign-up/email');
    setIsMailSended(searchParams.get('isMailSended') === 'true' ?? false);
  }, [searchParams]);

  return (
    <SignUpLayout>
      {!isMailSended ? (
        <MailEntry updateMail={setMail} />
      ) : (
        <MailVerification />
      )}
    </SignUpLayout>
  );
};
