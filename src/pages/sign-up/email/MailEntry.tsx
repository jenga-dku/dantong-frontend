import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content } from '../Content';
import { Input } from '../Input';
import { Button } from '../../../components/Button';
import { usePostMail } from '../../../query-hooks/sign-up';

export const MailEntry = ({
  updateMail,
}: {
  updateMail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [mail, setMail] = useState('');
  const navigate = useNavigate();
  const { mutate: postMail } = usePostMail(mail);

  useEffect(() => {
    updateMail(mail);
  }, [mail]);

  const submitMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMail();
  };

  return (
    <form
      onSubmit={(e) => {
        submitMail(e);
      }}
    >
      <Content
        message="학생 인증을 위한\n단국대학교 이메일을 직접 입력해주세요"
        content={
          <Input
            value={mail}
            placeholder="32XXXXXX"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setIsButtonActive(e.target.value.length > 0);
              setMail(e.target.value);
            }}
            additionalElement={<p className="text-[#C4C4C4]">@dankook.ac.kr</p>}
          />
        }
      />
      <Button
        className="mt-10"
        content="인증하기"
        disabled={!isButtonActive}
        size="full"
      />
    </form>
  );
};
