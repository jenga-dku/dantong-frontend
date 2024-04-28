import { useEffect, useState } from 'react';
import { SignUpLayout } from '../SignUpLayout';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const MailEntryPage = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mail, setMail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    mail.length === 0 && navigate('/sign-up/email');
    setIsMailSent(searchParams.get('isMailSent') === 'true' ?? false);
  }, [searchParams]);

  return (
    <SignUpLayout>
      {!isMailSent ? <MailEntry updateMail={setMail} /> : <MailVerification />}
    </SignUpLayout>
  );
};
