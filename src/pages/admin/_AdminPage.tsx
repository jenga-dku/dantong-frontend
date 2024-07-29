import { MenuContainer } from '@components/MenuContainer';
import { Button } from '@components/Button';
import { menuList } from './menList';
import useAuth from '@/hooks/useAuth';

export const AdminPage = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col gap-3">
      <MenuContainer menuList={menuList} />
      <Button content="로그아웃" size="full" onClick={logout} />
    </div>
  );
};
