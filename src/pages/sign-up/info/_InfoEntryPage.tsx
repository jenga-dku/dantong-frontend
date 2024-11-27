import { Content } from '../components/Content';
import { InputContainer } from '../components/InputContainer';
import { userInfoInputAttrList } from './infoEntryAttrList';

export const InfoEntryPage = ({ onNext }: { onNext: () => void }) => {
  return (
    <Content
      message="학생 인증이 완료되었습니다\n회원 정보를 입력해주세요"
      content={
        <InputContainer
          containerId="info"
          inputAttrList={userInfoInputAttrList}
          onNext={onNext}
        />
      }
    />
  );
};
