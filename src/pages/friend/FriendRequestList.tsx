import { ButtonColors, Button as DefaultButton } from '@/components/ui/Button';
import { FriendListItem } from './FriendListItem';
import { useGetInfiniteFriendRequestList } from '@/query-hooks/friend';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loader } from '@/components/ui/Loader';
import { Intersection } from '@/components/Intersection';

export const FriendRequestList = () => {
  const InfiniteFriendRequestListQuery = useGetInfiniteFriendRequestList({
    size: 3,
  });
  const {
    list: requestList,
    isFetching,
    intersection,
  } = useInfiniteScroll(InfiniteFriendRequestListQuery);
  if (!isFetching)
    return (
      <>
        {requestList!.map(({ studentId, friendshipId }) => (
          <FriendListItem
            name="사용자"
            major="SECURE"
            extraContent={
              <div className="flex gap-2">
                <Button content="수락" />
                <Button content="거절" color="dark-blue" />
              </div>
            }
          />
        ))}
        <Intersection ref={intersection} />
      </>
    );
  return <Loader className="mt-4" type="clip" loading={isFetching} />;
};

const Button = ({
  content,
  color,
}: {
  content: string;
  color?: ButtonColors;
}) => (
  <DefaultButton
    size="fit"
    content={content}
    color={color}
    className="h-fit min-h-fit py-2 text-xs"
  />
);
