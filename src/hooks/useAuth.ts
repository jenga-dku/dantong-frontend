import { useAuthStore } from '@/stores/auth-stores';
import { removeToken } from '@/utils/handleAuth';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const { setUserInfo, setIsLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    removeToken();
    setUserInfo({
      name: '',
      role: '',
      studentID: '',
    });
    setIsLoggedIn(false);
    navigate('/start');
    queryClient.removeQueries({ queryKey: ['user-info'] });
  };

  return { logout };
}
