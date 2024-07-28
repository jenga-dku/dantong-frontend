import { useNavigate } from 'react-router-dom';
import { Button } from '@components/ui/Button';
import { useGetUserInfo } from '@query-hooks/user';
import { useAuthStore } from '@stores/auth-stores';
import { MenuContainer } from '@components/MenuContainer';
import useAuth from '@/hooks/useAuth';
import { ProfileIcon } from '@/components/ProfileIcon';
import { UserInfoBox } from './UserInfoBox';
import { menuList } from './menuList';
import { useQueryClient } from '@tanstack/react-query';
import { UserInfoResponse } from '@/api/user/types';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuthStore();
  const { logout } = useAuth();
  const { data: fetchedUserInfo } = useGetUserInfo();
  const userInfo =
    (queryClient.getQueryData(['user-info', true]) as UserInfoResponse) ??
    fetchedUserInfo;

  if (isLoggedIn)
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-lg">
          <ProfileIcon />
          {userInfo && <UserInfoBox userInfo={userInfo!} />}
        </div>
        <MenuContainer menuList={menuList} />
        <Button content="로그아웃" size="full" onClick={logout} />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-white px-3 pb-5 pt-10  shadow-lg">
      <p>로그인 후 이용 가능합니다</p>
      <Button
        onClick={() => {
          navigate('/start');
        }}
        content="로그인"
        size="full"
      />
    </div>
  );
};
