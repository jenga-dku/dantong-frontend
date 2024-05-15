import { Box } from '../../components/Box';
import { Period, PeriodPicker } from '../../components/period-picker';

export const Header = ({
  periodState,
}: {
  periodState: [Period, React.Dispatch<React.SetStateAction<Period>>];
}) => {
  return (
    <Box className="flex-col gap-2">
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        className="text-xl"
      />
      <textarea placeholder="설명을 입력해주세요"></textarea>

      <PeriodPicker periodState={periodState} />
    </Box>
  );
};
