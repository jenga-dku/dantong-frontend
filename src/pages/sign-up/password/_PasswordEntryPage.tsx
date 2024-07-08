import { Content } from '../_components/Content';
import { InputContainer } from '../_components/InputContainer';

type passwordInfoInputAttr = {
  id: 'password' | 'passwordCheck';
  korName: string;
  type: string;
};

export const PasswordEntryPage = ({ onNext }: { onNext: () => void }) => {
  const inputAttrList: passwordInfoInputAttr[] = [
    { id: 'password', korName: '비밀번호', type: 'password' },
    { id: 'passwordCheck', korName: '비밀번호 확인', type: 'password' },
  ];

  return (
    <Content
      message="비밀번호를 입력해주세요"
      subMessage="영문자와 특수문자를 조합하여\n8자 이상의 비밀번호를 입력해주세요"
      content={
        <InputContainer
          containerID="password"
          inputAttrList={inputAttrList}
          onNext={onNext}
        />
      }
    />
  );
};
