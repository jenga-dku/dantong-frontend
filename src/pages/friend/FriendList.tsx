import { useGetInfiniteFriendList } from '@/query-hooks/friend';
import { useModal } from '@/hooks/modal/useModal';
import { RxCross2 } from 'react-icons/rx';
import { FriendListItem } from './FriendListItem';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loader } from '@/components/ui/Loader';
import { Intersection } from '@/components/Intersection';

export const FriendList = () => {
  const InfiniteFriendListQuery = useGetInfiniteFriendList({ size: 3 });
  const {
    list: friendList,
    isFetching,
    intersection,
  } = useInfiniteScroll(InfiniteFriendListQuery);

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
  if (!isFetching) {
    return (
      <>
        {friendList!.map(() => (
          <FriendListItem
            name="사용자"
            majorName="SOFTWARE"
            extraContent={
              <RxCross2 className="clickable" onClick={deleteFriend} />
            }
          />
        ))}
        <Intersection ref={intersection} />
      </>
    );
  }
  return <Loader className="mt-4" type="clip" loading={isFetching} />;
};
