import {
  useDeleteFriend,
  useGetFriendEvent,
  useGetInfiniteFriendList,
} from '@/query-hooks/friend';
import { useModal } from '@/hooks/modal/useModal';
import { RxCross2 } from 'react-icons/rx';
import { FriendListItem } from './FriendListItem';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loader } from '@/components/ui/Loader';
import { Intersection } from '@/components/Intersection';
import { memo, useState } from 'react';
import { Box } from '@/components/ui/Box';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import '@/components/calendar/styles.css';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

export const FriendList = () => {
  const { open } = useModal();
  const [friendEventState, setFriendEventState] = useState({
    open: false,
    studentId: '',
    name: '',
  });
  const { mutate: deleteFriend } = useDeleteFriend();
  const InfiniteFriendListQuery = useGetInfiniteFriendList({ size: 3 });
  const {
    list: friendList,
    isLoading,
    intersection,
  } = useInfiniteScroll(InfiniteFriendListQuery);
  const { data: friendEventList, isFetched } = useGetFriendEvent(
    friendEventState.studentId,
  );

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
        {friendList!.map(({ friendshipId, studentId, ...props }) => (
          <Box className="clickable">
            <FriendListItem
              onClick={() => {
                setFriendEventState({
                  open: true,
                  studentId,
                  name: props.name,
                });
              }}
              extraContent={
                <DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteButtonClick(friendshipId);
                  }}
                />
              }
              {...props}
            />
          </Box>
        ))}

        <Intersection ref={intersection} />
        <BottomSheet
          open={friendEventState.open}
          snapPoints={({ maxHeight }) => [maxHeight * 0.7]}
          onDismiss={() => {
            setFriendEventState({ ...friendEventState, open: false });
          }}
        >
          <div className="flex flex-col items-center py-5">
            <strong>{friendEventState.name}님의 행사 신청 내역</strong>
            <ul className=" flex w-full flex-col gap-7 p-7">
              {isFetched &&
                friendEventList!.map(({ title, postId }) => (
                  <li className="clickable">
                    <Link
                      to={`/news/${postId}`}
                      className="mb-3 flex w-full justify-between px-2"
                    >
                      <p>{title}</p>
                      <GoChevronRight />
                    </Link>
                    <hr />
                  </li>
                ))}
            </ul>
          </div>
        </BottomSheet>
      </div>
    );
  }
  return <Loader className="mt-4" type="clip" loading={isLoading} />;
};

const DeleteButton = memo(
  ({
    onClick,
  }: {
    onClick: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  }) => <RxCross2 className="clickable" onClick={onClick} />,
);
