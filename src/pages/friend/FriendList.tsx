// import { useGetInfiniteFriendList } from '@/query-hooks/friend';
import { useModal } from '@/hooks/modal/useModal';
import { RxCross2 } from 'react-icons/rx';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  // const { data: friends, isLoading } = useGetInfiniteFriendList({ size: 3 });

  const { open } = useModal();
  const deleteFriend = () => {
    open({
      title: '친구 삭제',
      desc: '친구 목록에서 삭제하시겠습니까?',
      option: {
        type: 'CONFIRM_CANCEL',
      },
    });
  };
  return (
    <>
      {Array.from({ length: 10 }).map(() => (
        <FriendListItem
          name="사용자"
          majorName="SOFTWARE"
          extraContent={
            <RxCross2 className="clickable" onClick={deleteFriend} />
          }
        />
      ))}
    </>
  );
};
