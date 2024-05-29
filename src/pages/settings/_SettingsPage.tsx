import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useGetUserInfo } from '../../query-hooks/user';

export const SettingsPage = () => {
  const navigate = useNavigate();
  const { data } = useGetUserInfo();

  return (
    <Button
      content="로그아웃"
      size="full"
      onClick={() => {
        navigate('/start');
      }}
    />
  );
};
