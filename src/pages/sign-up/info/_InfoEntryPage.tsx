import { Content } from '../Content';
import { InputContainer } from '../InputContainer';

type userInfoInputAttr = {
  id: 'name' | 'studentID' | 'phoneNumber' | 'major';
  korName: string;
  type: string;
};

export const InfoEntryPage = ({ onNext }: { onNext: () => void }) => {
  const userInfoInputAttrList: userInfoInputAttr[] = [
    {
      id: 'name',
      korName: '이름',
      type: 'text',
    },
    {
      id: 'studentID',
      korName: '학번',
      type: 'text',
    },
    {
      id: 'phoneNumber',
      korName: '휴대폰번호',
      type: 'text',
    },
    {
      id: 'major',
      korName: '전공',
      type: 'select',
    },
  ];

  return (
    <>
      <Content
        message="학생 인증이 완료되었습니다\n회원 정보를 입력해주세요"
        content={
          <InputContainer
            containerID="info"
            inputAttrList={userInfoInputAttrList}
            onNext={onNext}
          />
        }
      />
    </>
  );
};
