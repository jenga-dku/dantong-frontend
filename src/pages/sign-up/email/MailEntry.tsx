import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content } from '../Content';
import { Input } from '../Input';
import { Button } from '../../../components/Button';
import {
  usePostMail,
  usePostVerificationCode,
} from '../../../query-hooks/sign-up';

export const MailEntry = ({
  updateMail,
}: {
  updateMail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [mail, setMail] = useState('');
  const [code, setCode] = useState('');
  const { mutate: postMail } = usePostMail({
    onSuccess: (res) => {
      setIsMailSent(true);
    },
  });
  const { mutate: mutateCode } = usePostVerificationCode({
    onError: (res) => {
      console.log(res);
    },
  });

  const [isMailSent, setIsMailSent] = useState(false);

  useEffect(() => {
    updateMail(mail);
  }, [mail]);

  const submitMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMail(mail);
  };

  const verifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code.length === 6) {
      mutateCode({ studentId: mail, emailCode: code });
    } else {
      alert('6자리 인증코드를 입력해주세요');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        !isMailSent ? submitMail(e) : verifyCode(e);
      }}
    >
      <Content
        message="학생 인증을 위한\n단국대학교 이메일을 직접 입력해주세요"
        content={
          !isMailSent ? (
            <Input
              value={mail}
              placeholder="32XXXXXX"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsButtonActive(e.target.value.length > 0);
                setMail(e.target.value);
              }}
              additionalElement={
                <p className="text-[#C4C4C4]">@dankook.ac.kr</p>
              }
            />
          ) : (
            <Input
              value={code}
              placeholder="인증코드 7자리"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsButtonActive(e.target.value.length > 0);
                setCode(e.target.value);
              }}
            />
          )
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
