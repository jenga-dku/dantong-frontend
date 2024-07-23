import {
  PiNoteLight,
  PiNotePencilLight,
  PiNotebookLight,
} from 'react-icons/pi';
import { MenuContainer } from '@components/MenuContainer';
import { Button } from '@components/Button';
import useAuth from '@/hooks/useAuth';

export const AdminPage = () => {
  const { logout } = useAuth();

  const menuList = [
    {
      id: 'form-list',
      icon: <PiNoteLight />,
      menuName: '응답 현황',
    },
    { id: 'news-upload', icon: <PiNotePencilLight />, menuName: '소식 업로드' },
    { id: 'form-upload', icon: <PiNotebookLight />, menuName: '폼 업로드' },
  ];

  return (
    <div className="flex flex-col gap-3">
      <MenuContainer menuList={menuList} />
      <Button content="로그아웃" size="full" onClick={logout} />
    </div>
  );
};
