import { useEffect, useRef, useState } from 'react';
import { Content } from '../Content';
import { Input } from '../Input';
import { SignUpLayout } from '../SignUpLayout';
import { Button } from '../../../components/Button';

type userInfo = {
  name: string;
  studentID: string;
  phoneNumber: string;
  major: string;
};

type userInfoInputAttr = {
  id: 'name' | 'studentID' | 'phoneNumber' | 'major';
  korName: string;
};

export const InfoEntryPage = () => {
  const [userInfo, setUserInfo] = useState<userInfo>({
    name: '',
    studentID: '',
    phoneNumber: '',
    major: '',
  });
  const [activatedInputIndex, setActivatedInputIndex] = useState(0);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const userInfoInputAttrList: userInfoInputAttr[] = [
    {
      id: 'name',
      korName: '이름',
    },
    {
      id: 'studentID',
      korName: '학번',
    },
    {
      id: 'phoneNumber',
      korName: '휴대폰번호',
    },
    {
      id: 'major',
      korName: '전공',
    },
  ];

  const isEntryCompleted = activatedInputIndex === userInfoInputAttrList.length;

  useEffect(() => {
    const currentInput =
      inputContainerRef.current?.children[0]?.querySelector('input');
    currentInput?.focus();
  }, [activatedInputIndex]);

  return (
    <SignUpLayout>
      <Content
        message="학생 인증이 완료되었습니다\n회원 정보를 입력해주세요"
        content={
          <div className="flex flex-col gap-8" ref={inputContainerRef}>
            {userInfoInputAttrList
              .slice(0, activatedInputIndex + 1)
              .reverse()
              .map(({ id, korName }, inputIndex) => (
                <Input
                  value={userInfo[id]}
                  className="text-2xl"
                  placeholder={korName}
                  label={korName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUserInfo((prev) => {
                      return { ...prev, [id]: e.target.value };
                    });
                  }}
                  additionalElement={
                    inputIndex !== 0 ||
                    isEntryCompleted || (
                      <Button
                        content="확인"
                        size="fit"
                        onClick={() => {
                          setActivatedInputIndex((prev) => prev + 1);
                        }}
                        disabled={userInfo[id].length === 0}
                      />
                    )
                  }
                />
              ))}
          </div>
        }
      />
      {isEntryCompleted ? (
        <Button content="다음" onClick={() => {}} size="full" />
      ) : (
        <div />
      )}
    </SignUpLayout>
  );
};
