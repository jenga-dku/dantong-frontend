import { MajorKorean } from '@/types/major';

export type FriendListItem = {
  studentId: string;
  major: MajorKorean;
  name: string;
  friendshipId: number;
};
