import { useAuthStore } from '@/stores/auth-stores';
import { removeToken } from '@/utils/handleAuth';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const { setUserInfo, setIsLoggedIn, setIsTokenIssued } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    removeToken();
    setUserInfo({
      name: '',
      role: '',
      studentId: '',
    });
    setIsLoggedIn(false);
    setIsTokenIssued(false);
    navigate('/start');
    queryClient.setQueryData(['user-info', true], {});
  };

  return { logout };
}
