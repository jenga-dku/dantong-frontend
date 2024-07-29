import { Button } from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export const FooterButton = ({
  handlePatchEvent,
}: {
  handlePatchEvent: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        className="bg-zinc-300 text-sm hover:bg-zinc-400"
        content="취소"
        size="full"
        onClick={() => {
          navigate('/settings');
        }}
      />
      <Button
        className="text-sm text-white"
        content="확인"
        onClick={handlePatchEvent}
      />
    </div>
  );
};
