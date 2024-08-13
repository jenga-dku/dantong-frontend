import {
  useDeleteFriend,
  useGetInfiniteFriendList,
} from '@/query-hooks/friend';
import { useModal } from '@/hooks/modal/useModal';
import { RxCross2 } from 'react-icons/rx';
import { FriendListItem } from './FriendListItem';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loader } from '@/components/ui/Loader';
import { Intersection } from '@/components/Intersection';
import { memo } from 'react';

export const FriendList = () => {
  const { open } = useModal();
  const { mutate: deleteFriend } = useDeleteFriend();
  const InfiniteFriendListQuery = useGetInfiniteFriendList({ size: 3 });
  const {
    list: friendList,
    isLoading,
    intersection,
  } = useInfiniteScroll(InfiniteFriendListQuery);

  const handleDeleteButtonClick = (friendshipId: number) => {
    open({
      title: '친구 삭제',
      desc: '친구 목록에서 삭제하시겠습니까?',
      option: {
        type: 'CONFIRM_CANCEL',
        confirmEvent: () => deleteFriend(friendshipId),
      },
    });
  };

  if (!isLoading) {
    return (
      <div className="flex flex-col gap-4">
        {friendList!.map(({ friendshipId, ...props }) => (
          <FriendListItem
            {...props}
            extraContent={
              <DeleteButton
                onClick={() => handleDeleteButtonClick(friendshipId)}
              />
            }
          />
        ))}
        <Intersection ref={intersection} />
      </div>
    );
  }
  return <Loader className="mt-4" type="clip" loading={isLoading} />;
};

const DeleteButton = memo(({ onClick }: { onClick: () => void }) => (
  <RxCross2 className="clickable" onClick={onClick} />
));
