import {
  ButtonColors,
  ButtonProps,
  Button as DefaultButton,
} from '@/components/ui/Button';
import { FriendListItem } from './FriendListItem';
import {
  useAcceptFriend,
  useGetInfiniteFriendRequestList,
} from '@/query-hooks/friend';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loader } from '@/components/ui/Loader';
import { Intersection } from '@/components/Intersection';

export const FriendRequestList = () => {
  const InfiniteFriendRequestListQuery = useGetInfiniteFriendRequestList({
    size: 3,
  });
  const {
    list: requestList,
    isLoading,
    intersection,
  } = useInfiniteScroll(InfiniteFriendRequestListQuery);
  const { mutate: acceptFriend } = useAcceptFriend();

  if (!isLoading)
    return (
      <>
        {requestList!.map(({ friendshipId, name, major }) => (
          <FriendListItem
            name={name}
            major={major}
            key={friendshipId}
            extraContent={
              <div className="flex gap-2">
                <Button
                  content="수락"
                  onClick={() => {
                    acceptFriend(friendshipId);
                  }}
                />
                <Button content="거절" color="dark-blue" />
              </div>
            }
          />
        ))}
        <Intersection ref={intersection} />
      </>
    );
  return <Loader className="mt-4" type="clip" loading={isLoading} />;
};

const Button = ({
  content,
  color,
  ...props
}: {
  content: string;
  color?: ButtonColors;
} & ButtonProps) => (
  <DefaultButton
    size="fit"
    content={content}
    color={color}
    className="h-fit min-h-fit py-2 text-xs"
    {...props}
  />
);
