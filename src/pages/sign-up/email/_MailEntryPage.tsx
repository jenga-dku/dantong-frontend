import { useEffect, useState } from 'react';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signUpInfo } from '../_SignUpPage';

export const MailEntryPage = ({
  updateState,
}: {
  updateState: React.Dispatch<React.SetStateAction<signUpInfo>>;
}) => {
  const [isMailSent, setIsMailSent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mail, setMail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    mail.length === 0 && navigate('/sign-up/email');
    setIsMailSent(searchParams.get('isMailSent') === 'true' ?? false);
  }, [searchParams]);

  useEffect(() => {
    isMailSent && updateState((prev) => ({ ...prev, 1: { mail } }));
  }, [isMailSent]);

  return !isMailSent ? (
    <MailEntry updateMail={setMail} />
  ) : (
    <MailVerification />
  );
};
