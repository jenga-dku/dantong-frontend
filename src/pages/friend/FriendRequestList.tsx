import { ButtonColors, Button as DefaultButton } from '@/components/ui/Button';
import { FriendListItem } from './FriendListItem';

export const FriendRequestList = () => (
  <>
    {Array.from({ length: 3 }).map(() => (
      <FriendListItem
        name="사용자"
        majorName="SECURE"
        extraContent={
          <div className="flex gap-2">
            <Button content="수락" />
            <Button content="거절" color="dark-blue" />
          </div>
        }
      />
    ))}
  </>
);

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
