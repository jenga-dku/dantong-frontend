import { TabPageLayout } from './TabLayout';
import { FriendList } from './FriendList';
import { FriendRequestList } from './FriendRequestList';

export const FriendPage = () => {
  const tabList = ['친구', '요청'];

  return (
    <TabPageLayout tabList={tabList}>
      <FriendList />
      <FriendRequestList />
    </TabPageLayout>
  );
};
