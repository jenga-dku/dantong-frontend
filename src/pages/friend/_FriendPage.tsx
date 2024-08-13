import { TabPageLayout } from './TabLayout';
import { FriendRegister } from './FriendRegister';
import { Friend } from './Friend';

export const FriendPage = () => {
  const tabList = ['친구', '요청'];

  return (
    <TabPageLayout tabList={tabList}>
      <Friend />
      <FriendRegister />
    </TabPageLayout>
  );
};
