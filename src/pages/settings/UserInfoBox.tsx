import { UserInfoResponse } from '@/api/user/types';
import { getMajorKoreanName } from '@/utils/getMajorKoreanName';

export const UserInfoBox = ({
  userInfo: { majorName, name, studentId, phoneNumber },
}: {
  userInfo: UserInfoResponse;
}) => (
  <div className="flex flex-col gap-1">
    <p className="w-fit rounded-md text-xs text-primary">
      {getMajorKoreanName(majorName)}
    </p>
    <p className="flex items-center gap-1">
      <strong>{name}</strong>
      <span className="text-sm">({studentId})</span>
    </p>
    <p className="text-sm">{phoneNumber}</p>
  </div>
);
