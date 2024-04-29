import { useEffect, useState } from 'react';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSignUpInfoStore } from '../../../stores/signUpInfo-stores';

export const MailEntryPage = () => {
  const [isMailSent, setIsMailSent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mail, setMail] = useState('');
  const { signUpInfo, setSignUpInfo } = useSignUpInfoStore();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMailSent(searchParams.get('isMailSent') === 'true' ?? false);
  }, [searchParams]);

  useEffect(() => {
    !isMailSent && navigate('/sign-up/email');
    isMailSent && setSignUpInfo({ ...signUpInfo, mail: mail });
  }, [isMailSent]);

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_3fr]">
      {!isMailSent ? <MailEntry updateMail={setMail} /> : <MailVerification />}
    </div>
  );
};
