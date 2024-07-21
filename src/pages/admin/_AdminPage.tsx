import {
  PiNoteLight,
  PiNotePencilLight,
  PiNotebookLight,
} from 'react-icons/pi';
import { MenuContainer } from '@components/MenuContainer';
import { Button } from '@components/Button';
import { removeToken } from '@utils/handleAuth';
import { useAuthStore } from '@stores/auth-stores';
import { useNavigate } from 'react-router-dom';

export const AdminPage = () => {
  const { setUserInfo, setIsLoggedIn } = useAuthStore();
  const navigate = useNavigate();

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
      <Button
        content="로그아웃"
        size="full"
        onClick={() => {
          removeToken();
          setUserInfo({
            name: '',
            role: '',
            studentID: '',
          });
          setIsLoggedIn(false);
          navigate('/start');
        }}
      />
    </div>
  );
};
