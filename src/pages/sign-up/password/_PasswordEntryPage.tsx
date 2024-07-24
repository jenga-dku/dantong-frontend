import { Content } from '../components/Content';
import { InputContainer } from '../components/InputContainer';
import { passwordInputAttrList } from './passwordInfoAttrList';

export const PasswordEntryPage = ({ onNext }: { onNext: () => void }) => {
  return (
    <Content
      message="비밀번호를 입력해주세요"
      subMessage="영문자와 특수문자를 조합하여\n8자 이상의 비밀번호를 입력해주세요"
      content={
        <InputContainer
          containerId="password"
          inputAttrList={passwordInputAttrList}
          onNext={onNext}
        />
      }
    />
  );
};
