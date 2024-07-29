import { useState } from 'react';
import { Content } from '../components/Content';
import { Input } from '../components/Input';
import { Button } from '@components/ui/Button';
import { usePostMail, usePostVerificationCode } from '@query-hooks/sign-up';
import { useSignUpInfoStore } from '@stores/signUpInfo-stores';
import { VerificationResponse } from '@api/sign-up/types';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/modal/useModal';
import { Loader } from '@/components/ui/Loader';

export const MailEntry = ({
  updateIsVerified,
}: {
  updateIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [code, setCode] = useState('');
  const [isMailSent, setIsMailSent] = useState(false);
  const { signUpInfo, setSignUpInfo, setSignUpToken } = useSignUpInfoStore();
  const navigate = useNavigate();
  const { open } = useModal();
  const [isMailPosting, setIsMailPosting] = useState(true);

  const { mutate: postMail } = usePostMail({
    onSuccess: () => {
      setIsMailSent(true);
      setSignUpInfo({ ...signUpInfo, studentId });
      setIsMailPosting(false);
      open({
        title: '이메일 전송 완료',
        desc: '인증 이메일을 확인해주세요',
      });
    },
    onMutate: () => {
      open({
        title: <p className="flex w-full justify-center">이메일 전송 중</p>,
        desc: isMailPosting ? (
          <Loader
            loading={isMailPosting}
            type="clip"
            className="mt-5"
            size={30}
          />
        ) : (
          '인증 이메일을 확인해주세요'
        ),
        option: {
          type: 'DISABLE_CANCLE',
        },
      });
    },
  });

  const { mutate: postCode } = usePostVerificationCode({
    onSuccess: (res: VerificationResponse) => {
      setSignUpToken(res.signupToken);
      navigate('?isMailSent=true');
      updateIsVerified(true);
    },
  });

  const submitStudentId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMail(studentId);
  };

  const verifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code.length === 6) {
      postCode({ studentId: studentId, emailCode: code });
    } else {
      alert('6자리 인증코드를 입력해주세요');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        !isMailSent ? submitStudentId(e) : verifyCode(e);
      }}
    >
      <Content
        message={
          !isMailSent
            ? '학생 인증을 위한\n단국대학교 이메일을 직접 입력해주세요'
            : '인증메일이 전송되었습니다.\n인증코드 6자리를 입력해주세요'
        }
        content={
          !isMailSent ? (
            <Input
              value={studentId}
              placeholder="32XXXXXX"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsSubmitButtonActive(e.target.value.length > 0);
                setStudentId(e.target.value);
              }}
              inputContent={<p className="text-[#C4C4C4]">@dankook.ac.kr</p>}
            />
          ) : (
            <Input
              value={code}
              placeholder="인증코드 6자리"
              maxLength={6}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsSubmitButtonActive(e.target.value.length > 0);
                setCode(e.target.value);
              }}
            />
          )
        }
      />
      <Button
        className="mt-10"
        content="인증하기"
        disabled={!isSubmitButtonActive}
      />
    </form>
  );
};
