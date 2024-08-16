import { FriendList } from './FriendList';
import { FriendRequestList } from './FriendRequestList';

export const Friend = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1">
        <span className="mb-1 text-sm text-zinc-400">친구 목록</span>
        <hr className="mb-2" />
        <FriendList />
      </div>
      <div className="flex-1">
        <span className="mb-1 text-sm text-zinc-400">친구 요청</span>
        <hr className="mb-2" />
        <FriendRequestList />
      </div>
    </div>
  );
};
