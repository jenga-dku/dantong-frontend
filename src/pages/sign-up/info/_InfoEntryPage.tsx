import { useState } from 'react';
import { Content } from '../Content';
import { Input } from '../Input';
import { SignUpLayout } from '../SignUpLayout';
import { Button } from '../../../components/Button';

export const InfoEntryPage = () => {
  const [userInfo, setUserInfo] = useState({ name: '' });
  return (
    <SignUpLayout>
      <Content
        message="학생 인증이 완료되었습니다\n회원 정보를 입력해주세요"
        content={
          <Input
            value={userInfo.name}
            className="text-2xl"
            placeholder="이름"
            label="이름"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserInfo({ name: e.target.value });
            }}
            additionalElement={
              <Button content="확인" size="fit" onClick={() => {}} />
            }
          />
        }
      />
      <div />
    </SignUpLayout>
  );
};
