import { PeriodPicker } from '@/components/period-picker';
import { Box } from '@/components/ui/Box';
import { Period } from '@/types/period-picker/period';
import { useState } from 'react';

export const PeriodInput = () => {
  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });
  return (
    <Box>
      <PeriodPicker periodState={periodState} />
    </Box>
  );
};
