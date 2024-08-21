import { PeriodPicker } from '@/components/period-picker';
import { Box } from '@/components/ui/Box';
import { Period } from '@/types/period-picker/period';
import { FormRegister } from '@/types/react-hook-form';
import { useState } from 'react';

export const PeriodInput = ({
  register,
}: {
  register: Omit<FormRegister, 'register'>;
}) => {
  const periodState = useState<Period>({
    start: new Date(),
    end: new Date(),
  });
  return (
    <Box>
      <PeriodPicker periodState={periodState} {...register} />
    </Box>
  );
};
