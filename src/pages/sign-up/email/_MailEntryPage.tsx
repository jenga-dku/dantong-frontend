import { useState } from 'react';
import { MailEntry } from './MailEntry';
import { MailVerification } from './MailVerification';

export const MailEntryPage = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_3fr]">
      {!isVerified ? (
        <MailEntry updateIsVerified={setIsVerified} />
      ) : (
        <MailVerification />
      )}
    </div>
  );
};
