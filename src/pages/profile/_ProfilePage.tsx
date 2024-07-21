import { HiUser } from 'react-icons/hi';
import { getMajorKoreanName } from '@utils/getMajorKoreanName';
import { Button } from '@components/Button';
import { useGetUserInfo, usePatchUserInfo } from '@query-hooks/user';
import { MAJOR } from '@src/types/major';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ModifiedUserInfo } from '@api/user/types';
import { useModal } from '@hooks/useModal';

export const ProfilePage = () => {
  const { data: userInfo, isSuccess: isUserInfoLoadedSuccess } =
    useGetUserInfo();
  const navigate = useNavigate();
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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
        <div className="w-fit rounded-2xl bg-zinc-200 p-1 text-[80px] text-white">
          <HiUser />
        </div>
        <div className="flex w-[calc(100%-95px)] flex-col gap-2">
          <p className="w-full rounded-md text-xs text-primary">
            <select
              className="select h-fit min-h-fit w-full p-0 text-gray-400"
              name="major"
              onChange={handleInputChange}
            >
              <option disabled selected>
                {getMajorKoreanName(userInfo?.majorName)}
              </option>
              {Object.entries(MAJOR)
                .filter(([id]) => id !== userInfo?.majorName)
                .map(([id, major]) => (
                  <option value={id}>{major}</option>
                ))}
            </select>
          </p>
          <div className="flex items-center gap-1">
            <input
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder={userInfo?.name}
            />
          </div>
          <input
            name="phoneNumber"
            onChange={handleInputChange}
            type="text"
            placeholder={userInfo?.phoneNumber}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button
          className="bg-zinc-300 text-sm hover:bg-zinc-400"
          content="취소"
          size="full"
          onClick={() => {
            navigate('/settings');
          }}
        />
        <Button
          className="text-sm text-white"
          content="확인"
          onClick={handlePatchEvent}
        />
      </div>
    </div>
  );
};
