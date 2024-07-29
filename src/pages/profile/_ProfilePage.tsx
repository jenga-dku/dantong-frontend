import { useGetUserInfo, usePatchUserInfo } from '@query-hooks/user';
import { useEffect, useState } from 'react';
import { ModifiedUserInfo } from '@api/user/types';
import { useModal } from '@/hooks/modal/useModal';
import { FooterButton } from './FooterButton';
import { MajorSelect } from './MajorSelect';
import { ProfileIcon } from '../../components/ProfileIcon';
import { Input } from './Input';

export const ProfilePage = () => {
  const { data: userInfo, isSuccess: isUserInfoLoadedSuccess } =
    useGetUserInfo();
  const { open } = useModal();
  const [modifedInfo, setModifiedInfo] = useState<ModifiedUserInfo>({
    name: '',
    phoneNumber: '',
    major: '',
  });
  const { mutate: patch } = usePatchUserInfo();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { value, name } = e.target;
    if (value.length === 0) {
      setModifiedInfo((prev) => ({
        ...prev,
        [name]: Object.getOwnPropertyDescriptor(userInfo, name)?.value,
      }));
    } else {
      setModifiedInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePatchEvent = () => {
    open({
      title: '정보 수정',
      desc: '수정하시겠습니까?',
      option: { type: 'CONFIRM', confirmEvent: () => patch(modifedInfo) },
    });
  };

  useEffect(() => {
    userInfo &&
      setModifiedInfo({
        name: userInfo.name,
        phoneNumber: userInfo.phoneNumber,
        major: userInfo.majorName,
      });
  }, [isUserInfoLoadedSuccess]);

  if (!isUserInfoLoadedSuccess) return <></>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
        <ProfileIcon />
        <div className="flex w-[calc(100%-95px)] flex-col gap-2">
          <MajorSelect
            majorName={userInfo.majorName!}
            handleInputChange={handleInputChange}
          />
          <Input
            name="name"
            placeholder={userInfo.name!}
            onChange={handleInputChange}
          />
          <Input
            name="phoneNumber"
            placeholder={userInfo.phoneNumber!}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <FooterButton handlePatchEvent={handlePatchEvent} />
    </div>
  );
};
