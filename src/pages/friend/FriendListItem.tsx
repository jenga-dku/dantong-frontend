import { UserInfoResponse } from '@/api/user/types';
import { getMajorKoreanName } from '@/utils/getMajorKoreanName';
import { ReactNode } from 'react';

type FriendListItemProps = Pick<UserInfoResponse, 'name' | 'major'> & {
  extraContent?: ReactNode;
};

export const FriendListItem = ({
  name,
  major,
  extraContent,
}: FriendListItemProps) => (
  <li className="flex items-center justify-between gap-1">
    <div>
      <p className="mb-1 text-xs text-primary">{getMajorKoreanName(major)}</p>
      <p>{name}</p>
    </div>
    {extraContent}
  </li>
);
