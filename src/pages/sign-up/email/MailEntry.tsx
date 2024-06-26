import { useState } from 'react';
import { Content } from '../Content';
import { Input } from '../Input';
import { Button } from '../../../components/Button';
import {
  usePostMail,
  usePostVerificationCode,
} from '../../../query-hooks/sign-up';
import { useSignUpInfoStore } from '../../../stores/signUpInfo-stores';
import { VerificationResponse } from '../../../api/sign-up/types';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import { Loader } from '../../../components/Loader';

export const MailEntry = ({
  updateIsVerified,
}: {
  updateIsVerified: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);
  const [studentID, setStudentID] = useState('');
  const [code, setCode] = useState('');
  const [isMailSent, setIsMailSent] = useState(false);
  const { signUpInfo, setSignUpInfo, setSignUpToken } = useSignUpInfoStore();
  const navigate = useNavigate();
  const { open } = useModal();
  const [isMailPosting, setIsMailPosting] = useState(true);

  const { mutate: postMail } = usePostMail({
    onSuccess: () => {
      setIsMailSent(true);
      setSignUpInfo({ ...signUpInfo, studentID });
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

  const submitStudentID = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postMail(studentID);
  };

  const verifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code.length === 6) {
      postCode({ studentId: studentID, emailCode: code });
    } else {
      alert('6자리 인증코드를 입력해주세요');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        !isMailSent ? submitStudentID(e) : verifyCode(e);
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
              value={studentID}
              placeholder="32XXXXXX"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsSubmitButtonActive(e.target.value.length > 0);
                setStudentID(e.target.value);
              }}
              additionalElement={
                <p className="text-[#C4C4C4]">@dankook.ac.kr</p>
              }
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
        size="full"
      />
    </form>
  );
};
