import { useState } from 'react';
import { Box } from '../../components/Box';
import 'react-datepicker/dist/react-datepicker.css';
import { Period, PeriodPicker } from '../../components/period-picker';

export const FormUploadPage = () => {
  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });

  return (
    <>
      <Box className="flex-col gap-2">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          className="text-xl"
        />
        <textarea placeholder="설명을 입력해주세요"></textarea>
        <p className="text-sm">기간</p>
        <div className="flex items-center gap-2">
          <PeriodPicker periodState={periodState} />
        </div>
      </Box>
    </>
  );
};
