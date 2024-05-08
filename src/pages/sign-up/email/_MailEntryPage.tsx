import { useState } from 'react';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';

export const MailEntryPage = () => {
  const [isMailSent, setIsMailSent] = useState(false);

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_3fr]">
      {!isMailSent ? (
        <MailEntry updateIsMailSent={setIsMailSent} />
      ) : (
        <MailVerification />
      )}
    </div>
  );
};
