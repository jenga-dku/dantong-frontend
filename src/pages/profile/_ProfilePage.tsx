import { useGetUserInfo, usePatchUserInfo } from '@query-hooks/user';
import { useEffect, useState } from 'react';
import { UserInfoResponse } from '@api/user/types';
import { useModal } from '@/hooks/modal/useModal';
import { FooterButton } from './FooterButton';
import { MajorSelect } from './MajorSelect';
import { Input } from '@/components/ui/Input';
import { Box } from '@/components/ui/Box';
import { setInputChange } from '@/utils/setInputChange';
import { Major } from '@/types/major';

type ModifiedInfo = Pick<UserInfoResponse, 'name' | 'phoneNumber'> & {
  majorName?: Major;
};

export const ProfilePage = () => {
  const { data: userInfo, isSuccess: isUserInfoLoadedSuccess } =
    useGetUserInfo();
  const { open } = useModal();
  const [modifedInfo, setModifiedInfo] = useState<ModifiedInfo>({
    name: '',
    phoneNumber: '',
    majorName: undefined,
  });
  const { mutate: patch } = usePatchUserInfo();

  useEffect(() => {
    userInfo &&
      setModifiedInfo({
        name: userInfo.name,
        phoneNumber: userInfo.phoneNumber,
        majorName: userInfo.majorName,
      });
  }, [isUserInfoLoadedSuccess]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name: inputName } = e.target;
    if (e.target.value.length !== 0) {
      setInputChange(e, setModifiedInfo);
    } else {
      setModifiedInfo({
        ...modifedInfo,
        [inputName]: userInfo![inputName as keyof UserInfoResponse],
      });
    }
  };
  useEffect(() => {
    console.log(modifedInfo);
  }, [modifedInfo]);

  const handlePatchEvent = () => {
    open({
      title: '정보 수정',
      desc: '수정하시겠습니까?',
      option: {
        type: 'CONFIRM',
        confirmEvent: () =>
          patch({
            name: modifedInfo.name,
            phoneNumber: modifedInfo.phoneNumber,
            major: modifedInfo.majorName!,
          }),
      },
    });
  };

  if (isUserInfoLoadedSuccess)
    return (
      <div className="flex flex-col gap-4">
        <Box className="flex-col gap-2">
          <MajorSelect
            majorName={userInfo.majorName!}
            handleInputChange={handleInputChange}
          />
          <Input
            name="name"
            placeholder={userInfo.name!}
            onChange={handleInputChange}
            outline="outline"
          />
          <Input
            name="phoneNumber"
            placeholder={userInfo.phoneNumber!}
            onChange={handleInputChange}
            outline="outline"
          />
        </Box>
        <FooterButton handlePatchEvent={handlePatchEvent} />
      </div>
    );
  return <></>;
};
