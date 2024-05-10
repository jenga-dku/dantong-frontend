import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export const SettingsPage = () => {
  const navigate = useNavigate();
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
