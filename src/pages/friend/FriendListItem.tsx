import { FriendListItem as FriendListItemType } from '@/api/friend/types';
import { ReactNode } from 'react';

type FriendListItemProps = Pick<FriendListItemType, 'name' | 'major'> & {
  extraContent?: ReactNode;
  onClick?: () => void;
};

export const FriendListItem = ({
  name,
  major,
  extraContent,
  onClick,
}: FriendListItemProps) => (
  <li
    onClick={onClick}
    className="flex w-full items-center justify-between gap-1"
  >
    <div>
      <p className="mb-1 text-xs text-primary">{major}</p>
      <p>{name}</p>
    </div>
    {extraContent}
  </li>
);
