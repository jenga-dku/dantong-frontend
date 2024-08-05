export type FriendListItem = {
  studentId: string;
  name: string;
};

export type FriendRequestListItem = FriendListItem & {
  friendshipId: number;
};
